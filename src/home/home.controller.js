module.exports = {

  getAllHomeSections: () => new Promise((resolve) => {
    resolve([
      {
        id: 1,
        titles: [
          'Welcome to',
          'Ascendant Pharmacy Consultants',
        ],
        subtitles: [
          '“Higher Standards, Exceptional Consulting”',
        ],
        texts: [
          'Our desire is to tailor our services to meet your needs.',
          'Our standard is to exceed your expectations.',
          'Let us show you the benefits of working with a company that',
          'puts the Care in HealthCare.',
        ],
      },
    ]);
  }),

};

