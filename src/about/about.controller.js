const sections = [
  {
    id: '1',
    titles: ['Services Offered'],
    subtitles: [],
    texts: [
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' +
      'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,' +
      'as opposed to using Content here, content here, making it look like readable English.',
    ],
  },
  {
    id: '2',
    titles: ['Bios'],
    subtitles: [],
    texts: [
      'Contrary to popular belief, Lorem Ipsum is not simply random bodyText. ' +
      'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ' +
      'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, ' +
      'looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, ' +
      'and going through the cites of the word in classical literature, discovered the undoubtable source.',
    ],
  },
  {
    id: '3',
    titles: ['Ambulatory Surgical Consultants'],
    subtitles: [],
    texts: [
      'ASCendant Pharmacy Consultants provides North Texas ambulatory surgical hospitals with efficient systems to improve patient outcomes, ' +
      'operational efficiency and survey success with accrediting health care organizations. ' +
      'With a combined 75 years of pharmacy experience, we are considered by many to be expert consultants in the ambulatory surgical setting.',
    ],
  },
];

module.exports = {

  all: () => new Promise(callback => callback(sections)),

  get: id => new Promise(callback => callback(sections.filter(it => it.id === id)[0])),

};