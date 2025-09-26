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
    Paragraf: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
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

export interface HomeAktualnosci extends Struct.ComponentSchema {
  collectionName: 'components_home_aktualnoscis';
  info: {
    displayName: 'Aktualnosci';
  };
  attributes: {};
}

export interface HomeKrotkoOSzkole extends Struct.ComponentSchema {
  collectionName: 'components_home_krotko_o_szkoles';
  info: {
    displayName: 'KrotkoOSzkole';
  };
  attributes: {};
}

export interface HomeOsiagniecia extends Struct.ComponentSchema {
  collectionName: 'components_home_osiagniecias';
  info: {
    displayName: 'Osiagniecia';
  };
  attributes: {};
}

export interface HomeProfile extends Struct.ComponentSchema {
  collectionName: 'components_home_profiles';
  info: {
    displayName: 'Profil';
  };
  attributes: {};
}

export interface MenuKategoria extends Struct.ComponentSchema {
  collectionName: 'components_menu_kategorias';
  info: {
    displayName: 'Kategoria';
  };
  attributes: {
    NazwaKategorii: Schema.Attribute.String;
    Podstrona: Schema.Attribute.Component<'menu.menu-element', true>;
  };
}

export interface MenuMenuElement extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_elements';
  info: {
    displayName: 'MenuElement';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Opis: Schema.Attribute.String;
    rank: Schema.Attribute.Integer;
    Szablon: Schema.Attribute.Enumeration<['Automatyczny', 'W\u0142asny']>;
    Tytul: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'domyslny.link': DomyslnyLink;
      'domyslny.paragraf': DomyslnyParagraf;
      'domyslny.paragraf-link-obraz': DomyslnyParagrafLinkObraz;
      'home.aktualnosci': HomeAktualnosci;
      'home.krotko-o-szkole': HomeKrotkoOSzkole;
      'home.osiagniecia': HomeOsiagniecia;
      'home.profile': HomeProfile;
      'menu.kategoria': MenuKategoria;
      'menu.menu-element': MenuMenuElement;
    }
  }
}
