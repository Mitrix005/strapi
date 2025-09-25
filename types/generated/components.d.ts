import type { Schema, Struct } from '@strapi/strapi';

export interface DomyslnyLink extends Struct.ComponentSchema {
  collectionName: 'components_domyslny_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    NazwaLinku: Schema.Attribute.String;
    Plik: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DomyslnyParagraf extends Struct.ComponentSchema {
  collectionName: 'components_domyslny_paragrafs';
  info: {
    displayName: 'Paragraf';
  };
  attributes: {
    Paragraf: Schema.Attribute.Text;
  };
}

export interface DomyslnyParagrafLinkObraz extends Struct.ComponentSchema {
  collectionName: 'components_domyslny_paragraf_link_obrazs';
  info: {
    displayName: 'Paragraf + Link + Obraz';
  };
  attributes: {
    IloscKolumn: Schema.Attribute.Integer;
    Linki: Schema.Attribute.Component<'domyslny.link', true>;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Paragraf: Schema.Attribute.Component<'domyslny.paragraf', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'domyslny.link': DomyslnyLink;
      'domyslny.paragraf': DomyslnyParagraf;
      'domyslny.paragraf-link-obraz': DomyslnyParagrafLinkObraz;
    }
  }
}
