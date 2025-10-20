// src/admin/app.js
const authLogo = new URL('./extensions/logo.png', import.meta.url).href;
const menuLogo = new URL('./extensions/logo.png', import.meta.url).href;
const favicon = new URL('../../favicon.png', import.meta.url).href;

const FORCE_LANG_KEY = 'strapi-admin-language'; // preferencja UI w localStorage
const FORCE_LANG_VALUE = 'pl';

const hideLanguageSwitcherCSS = `
  /* Przełącznik języka w headerze/logowaniu */
  [data-strapi-header] [aria-label="Interface language"],
  [data-strapi-header] [data-testid="LanguageToggle"] { display: none !important; }

  /* Pole wyboru języka w profilu użytkownika */
  [data-testid="profile.interface-language"],
  [name="preferredLanguage"], /* awaryjnie ukryj select, jeśli testid się zmieni */
  label[for="preferredLanguage"] { display: none !important; }
`;

const bootstrap = (app) => {
  try {
    // 1) Wymuś polski od pierwszego wejścia
    const current = localStorage.getItem(FORCE_LANG_KEY);
    if (current !== FORCE_LANG_VALUE) {
      localStorage.setItem(FORCE_LANG_KEY, FORCE_LANG_VALUE);
      // Jednorazowy reload, by od razu załadować polskie tłumaczenia
      window.location.reload();
      return;
    }
  } catch (e) {
    // cicho ignorujemy, jeśli localStorage niedostępne
  }

  // 2) Schowaj wszystkie kontrolki zmiany języka (header + profil)
  const style = document.createElement('style');
  style.innerHTML = hideLanguageSwitcherCSS;
  document.head.appendChild(style);
};

export default {
  config: {
    // udostępniamy wyłącznie PL (przełącznik zniknie)
    locales: ['pl'],

    tutorials: false,
    notifications: { releases: false },

    head: { favicon },

    auth: { logo: authLogo },
    menu: { logo: menuLogo },

    // Twoje nadpiski tłumaczeń (możesz rozbudować)
    translations: {
      pl: {
        'Auth.form.welcome.title': 'Panel Administracyjny',
        'Content Manager': 'Menedżer treści',
        'Content Type Builder': 'Kreator typów treści',
        'HomePage.header.title': 'Witaj {name}',
        'HomePage.header.subtitle': 'Witaj w Panelu Administracyjnym 1LO',
      },
    },
  },
  bootstrap,
};
