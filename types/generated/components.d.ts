import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBaner extends Struct.ComponentSchema {
  collectionName: 'components_banner_baners';
  info: {
    displayName: 'Baner';
  };
  attributes: {
    Przyciski: Schema.Attribute.Component<'banner.przycisk', true>;
    ZdjecieBaner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface BannerPrzycisk extends Struct.ComponentSchema {
  collectionName: 'components_banner_przycisks';
  info: {
    displayName: 'Przycisk';
    icon: 'check';
  };
  attributes: {
    IconPath: Schema.Attribute.Text;
    Link: Schema.Attribute.String;
    Nazwa: Schema.Attribute.String;
  };
}

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
  attributes: {
    Naglowek: Schema.Attribute.String;
    Opis: Schema.Attribute.Text;
    Podpis: Schema.Attribute.String;
    Zdjecie: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeOsiagniecia extends Struct.ComponentSchema {
  collectionName: 'components_home_osiagniecias';
  info: {
    displayName: 'Osiagniecia';
  };
  attributes: {
    Tarcze: Schema.Attribute.Component<'inne.tarcza', true>;
    Wspolprace: Schema.Attribute.Component<'inne.wspolpraca', true>;
  };
}

export interface HomeProfile extends Struct.ComponentSchema {
  collectionName: 'components_home_profiles';
  info: {
    displayName: 'Profile';
  };
  attributes: {
    Profile: Schema.Attribute.Component<'inne.profil', true>;
  };
}

export interface InneKafelek extends Struct.ComponentSchema {
  collectionName: 'components_inne_kafeleks';
  info: {
    displayName: 'Kafelek';
    icon: 'apps';
  };
  attributes: {
    ImieNazwisko: Schema.Attribute.String;
    Opis: Schema.Attribute.String;
    przypinki: Schema.Attribute.Relation<
      'oneToMany',
      'api::przypinki.przypinki'
    >;
  };
}

export interface InneProfil extends Struct.ComponentSchema {
  collectionName: 'components_inne_profils';
  info: {
    displayName: 'Profil';
    icon: 'cog';
  };
  attributes: {
    IconPath: Schema.Attribute.Text;
    Kolor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    NazwaProfilu: Schema.Attribute.String;
    Opis: Schema.Attribute.String;
  };
}

export interface InneSekcjaKafelek extends Struct.ComponentSchema {
  collectionName: 'components_inne_sekcja_kafeleks';
  info: {
    displayName: 'SekcjaKafelek';
  };
  attributes: {
    Kafeleki: Schema.Attribute.Component<'inne.kafelek', true>;
    Naglowek: Schema.Attribute.String;
  };
}

export interface InneTarcza extends Struct.ComponentSchema {
  collectionName: 'components_inne_tarczas';
  info: {
    displayName: 'Tarcza';
  };
  attributes: {
    Zdjecie: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface InneWspolpraca extends Struct.ComponentSchema {
  collectionName: 'components_inne_wspolpracas';
  info: {
    displayName: 'Wspolpraca';
  };
  attributes: {
    Zdjecie: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
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
    Szablon: Schema.Attribute.Enumeration<
      ['Automatyczny', 'Kafelki', 'W\u0142asny']
    >;
    Tytul: Schema.Attribute.String;
  };
}

export interface StopkaPrzycisk extends Struct.ComponentSchema {
  collectionName: 'components_stopka_przycisks';
  info: {
    displayName: 'Przycisk';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Nazwa: Schema.Attribute.String;
  };
}

export interface SzablonySzablonKafelki extends Struct.ComponentSchema {
  collectionName: 'components_szablony_szablon_kafelkis';
  info: {
    displayName: 'Szablon - Kafelki';
  };
  attributes: {
    Szablon: Schema.Attribute.Component<'inne.sekcja-kafelek', true>;
    Tytul: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.baner': BannerBaner;
      'banner.przycisk': BannerPrzycisk;
      'domyslny.link': DomyslnyLink;
      'domyslny.paragraf': DomyslnyParagraf;
      'domyslny.paragraf-link-obraz': DomyslnyParagrafLinkObraz;
      'home.aktualnosci': HomeAktualnosci;
      'home.krotko-o-szkole': HomeKrotkoOSzkole;
      'home.osiagniecia': HomeOsiagniecia;
      'home.profile': HomeProfile;
      'inne.kafelek': InneKafelek;
      'inne.profil': InneProfil;
      'inne.sekcja-kafelek': InneSekcjaKafelek;
      'inne.tarcza': InneTarcza;
      'inne.wspolpraca': InneWspolpraca;
      'menu.kategoria': MenuKategoria;
      'menu.menu-element': MenuMenuElement;
      'stopka.przycisk': StopkaPrzycisk;
      'szablony.szablon-kafelki': SzablonySzablonKafelki;
    }
  }
}
