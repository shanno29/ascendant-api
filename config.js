module.exports = {

  env: 'development',
  MONGOOSE_DEBUG: true,
  jwtSecret: 'secret',

  port: process.env.PORT || (process.argv[2] || 3000),
  windows: '1.0.0.1',
  android: '1.5.0',

  images: 'http://localhost:3000/public/images',

  default_avatar: 'http://localhost:3000/public/images/default/default_avatar.jpg',
  default_banner: 'http://localhost:3000/public/images/default/default_banner.jpg',
  default_artwork: 'http://localhost:3000/public/images/default/default_artwork.jpg',

  coverage: '/coverage/lcov-report',
  public: '/public',
  doc: '/documentation',

};
