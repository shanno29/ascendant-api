module.exports = {
  // address: process.argv[2] || 'http://localhost'
  root: (process.argv[2] || 'http://localhost'),
  port: (process.argv[3] || 3000),
  url: `${this.root}:${this.port}`,
};
// process.env.PORT || (process.argv[2] || 10000),
// url: `http://localhost:${this.port}`,
// url: `http://www.ascrxconsultants.com:${this.port}`,
