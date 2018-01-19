module.exports = {
  port: process.env.PORT || (process.argv[2] || 10000),
  //baseUrl: 'http://localhost:3000',
  baseUrl: 'http://www.ascrxconsultants.com:10000',
  public: '/public',
  coverage: '/coverage/lcov-report',
  doc: '/documentation',
  jwtSecret: 'secret',
  env: 'development',
};
