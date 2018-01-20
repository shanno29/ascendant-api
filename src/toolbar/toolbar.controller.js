const sections = [
  {
    id: 'about',
    text: 'About',
  },
  {
    id: 'consulting',
    text: 'Consulting',
  },
  {
    id: 'forms',
    text: 'Forms',
  },
  {
    id: 'contact',
    text: 'Contact',
  },
];

module.exports = {

  all: () => new Promise(callback => callback(sections)),

  get: id => new Promise(callback => callback(sections.filter(it => it.id === id)[0])),

};

