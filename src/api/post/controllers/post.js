'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async find(ctx) {
    // Sprawdzamy czy jest parametr search w query
    if (ctx.query.search) {
      const searchTerm = ctx.query.search;

      // Usuwamy search z oryginalnego query, żeby nie interferował z filtrami
      const { search, ...queryWithoutSearch } = ctx.query;

      // Tworzymy customową logikę wyszukiwania
      const sanitizedQuery = await this.sanitizeQuery(ctx);

      // Pobieramy service dla post
      const postService = strapi.service('api::post.post');

      // Wyszukujemy posty po każdym wyrazie z search term
      const posts = await postService.find({
        ...sanitizedQuery,
        ...queryWithoutSearch,
        filters: {
          ...sanitizedQuery.filters,
          ...queryWithoutSearch.filters,
          $or: [
            // Dostosuj pola według potrzeb
            { Tytul: { $containsi: searchTerm } },
            { Opis: { $containsi: searchTerm } },
            { Autor: { $containsi: searchTerm } },
            // Możesz dodać więcej pól do wyszukiwania
          ]
        }
      });

      const sanitizedResults = await this.sanitizeOutput(posts, ctx);
      return this.transformResponse(sanitizedResults);
    }

    // Jeśli nie ma wyszukiwania, używamy domyślnej metody
    return super.find(ctx);
  },

  // Alternatywnie możesz dodać customową metodę tylko do wyszukiwania
  async search(ctx) {
    try {
      const { query } = ctx;
      const searchTerm = query.search;

      if (!searchTerm) {
        return ctx.badRequest('Search term is required');
      }

      // Rozdzielamy wyrazy i usuwamy puste stringi
      const searchWords = searchTerm.split(' ').filter(word => word.length > 0);

      const searchConditions = searchWords.flatMap(word => [
        { title: { $containsi: word } },
        { content: { $containsi: word } },
        { description: { $containsi: word } },
        // Dodaj więcej pól według potrzeb
      ]);

      const posts = await strapi.entityService.findMany('api::post.post', {
        filters: {
          $or: searchConditions
        },
        populate: '*', // lub określ konkretne pola do populacji
        ...query
      });

      return posts;
    } catch (err) {
      ctx.throw(500, err);
    }
  }
}));
