module.exports = {
  port: process.env.PORT || (process.argv[2] || 3000),
  images: 'http://localhost:3000/public/images',
  coverage: '/coverage/lcov-report',
  doc: '/documentation',
  public: '/public',
  jwtSecret: 'secret',
  env: 'development',
};
