const config = require('../_core/config');

module.exports = {

  getAllToolbarSections: () => new Promise((resolve) => {
    resolve({
      link: '/',
      logo: `${config.host}:${config.port}/public/images/logo.jpg`,
      items: [
        {
          id: 1, nav: '/', image: '', text: 'Home',
        },
        {
          id: 2, nav: 'about', image: 'bug_report', text: 'About',
        },
        {
          id: 3, nav: 'consulting', image: 'bug_report', text: 'Consulting',
        },
        {
          id: 4, nav: 'forms', image: 'bug_report', text: 'Forms',
        },
        {
          id: 5, nav: 'contact', image: 'bug_report', text: 'Contact',
        },
      ],
    });
  }),

};

