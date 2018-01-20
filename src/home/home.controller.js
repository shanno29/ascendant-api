const sections = [
  {
    id: '1',
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
];

module.exports = {

  all: () => new Promise(callback => callback(sections)),

  get: id => new Promise(callback => callback(sections.filter(it => it.id === id)[0])),

};
