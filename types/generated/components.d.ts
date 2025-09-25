import type { Schema, Struct } from '@strapi/strapi';

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    NazwaLinku: Schema.Attribute.String;
  };
}

export interface LinkParagrafLink extends Struct.ComponentSchema {
  collectionName: 'components_link_paragraf_links';
  info: {
    displayName: 'Paragraf + Link';
  };
  attributes: {
    Linki: Schema.Attribute.Component<'link.link', true>;
    Tytul: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.link': LinkLink;
      'link.paragraf-link': LinkParagrafLink;
    }
  }
}
