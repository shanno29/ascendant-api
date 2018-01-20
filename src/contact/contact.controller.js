const sections = [
  {
    id: '1',
    titles: ['Contact'],
    subtitles: ['TODO'],
    texts: ['TODO'],
  },
];

module.exports = {

  all: () => new Promise(callback => callback(sections)),

  get: id => new Promise(callback => callback(sections.filter(it => it.id === id)[0])),

};
