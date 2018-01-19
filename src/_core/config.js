module.exports = {
  port: process.env.PORT || (process.argv[2] || 10000),
  // url: `http://localhost:${this.port}`,
  url: `http://www.ascrxconsultants.com:${this.port}`,
  public: '/public',
  coverage: '/coverage/lcov-report',
  doc: '/documentation',
  jwtSecret: 'secret',
  env: 'development',
};
