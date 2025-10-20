module.exports = {
  async search(ctx) {
    const { query } = ctx.query;

    if (!query || query.trim() === '') {
      return ctx.badRequest('Query parameter is required');
    }

    try {
      const results = {
        posts: [],
        singleTypes: [],
      };

      // Wyszukiwanie w Collection Type "Post"
      const posts = await strapi.entityService.findMany('api::post.post', {
        filters: {
          $or: [
            {
              title: {
                $containsi: query, // case-insensitive search
              },
            },
            {
              description: {
                $containsi: query,
              },
            },
          ],
        },
        populate: '*', // dostosuj do swoich potrzeb
      });

      results.posts = posts.map(post => ({
        id: post.id,
        type: 'post',
        title: post.Tytul,
        description: post.Opis,
        // dodaj inne pola które chcesz zwrócić
      }));

      // Wyszukiwanie w Single Types
      // Przykład dla Single Type o nazwie "about"
      const singleTypeNames = ['hymn', 'patron', 'akademia-zamojska']; // dodaj swoje Single Types

      for (const typeName of singleTypeNames) {
        try {
          const singleType = await strapi.entityService.findMany(
            `api::${typeName}.${typeName}`,
            {
              populate: '*',
            }
          );

          // Sprawdź czy nazwa Single Type zawiera query
          if (typeName.toLowerCase().includes(query.toLowerCase())) {
            results.singleTypes.push({
              type: 'single-type',
              name: typeName,
              data: singleType,
            });
          }

          // Opcjonalnie: przeszukuj też zawartość Single Type
          if (singleType) {
            const contentMatch = Object.values(singleType).some(value => {
              if (typeof value === 'string') {
                return value.toLowerCase().includes(query.toLowerCase());
              }
              return false;
            });

            if (contentMatch && !results.singleTypes.find(st => st.name === typeName)) {
              results.singleTypes.push({
                type: 'single-type',
                name: typeName,
                data: singleType,
              });
            }
          }
        } catch (error) {
          // Single Type może nie istnieć lub być niedostępny
          console.log(`Could not fetch single type: ${typeName}`);
        }
      }

      return {
        results,
        query,
        totalResults: results.posts.length + results.singleTypes.length,
      };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
