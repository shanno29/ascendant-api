const sections = [
  {
    id: '1',
    titles: ['Forms'],
    subtitles: ['TODO'],
    texts: ['TODO'],
  },
];

module.exports = {

  all: () => new Promise(callback => callback(sections)),

  get: id => new Promise(callback => callback(sections.filter(it => it.id === id)[0])),

};

