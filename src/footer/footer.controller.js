module.exports = {

  getAllFooterSections: () => new Promise((resolve) => {
    resolve({
      id: 1,
      items: [
        [
          'Email: info-card@epcepc.com',
          'Phone: (855) 374-1029',
          'Fax: (855) 357-3557',
        ],
        [
          'Address:',
          '323 NW 12th Street,',
          '8Ste 108 Doral, FL 33126',
        ],
        [
          '© 2017 Matthew Shannon',
          'Legal Disclaimer',
          'Privacy Policy',
        ],
      ],
      facebook: {
        title: 'facebook',
        subtitle: 'like us on Facebook',
        nav: 'https://www.facebook.com/',
        image: 'facebook',
      },

      twitter: {
        title: 'twitter',
        subtitle: 'follow us on Twitter',
        nav: 'https://www.twitter.com/',
        image: 'twitter',
      },
    });
  }),

};
