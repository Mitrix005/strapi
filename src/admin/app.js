import logo from './extensions/logo.png'


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config : {
    locales: [
      'pl'
    ],
    tutorials: false,
    notifications: { releases: false },
    head: {
      favicon: logo,
    },
    auth: {
      logo: logo,
    },
    menu: {
      logo: logo,
    },
    translations: {
      pl: {
        "Auth.form.welcome.title": "Panel Administracyjny",
        "Content Manager": "Menedżer treści",
        "Content Type Builder": "Kreator typów treści",
      },
      en: {
        "Auth.form.welcome.title": "Panel Administracyjny"
      }
    },
  },
  bootstrap,
};
