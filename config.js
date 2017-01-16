module.exports = {

    env: 'development',
    MONGOOSE_DEBUG: true,
    jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f',
    db: 'mongodb://localhost:27017/vibetribe-debug',
    port: process.env.PORT || (process.argv[2] || 3000),
    windows_version: '1.0.0.1',
    android_version: '1.5.0',

    youtube: 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&key=AIzaSyACt--2aitJjRv_dtbwr0d2evAW-CUx3aU&q=',
    soundcloud: 'https://api.soundcloud.com/router?client_id=b450757614dc39d455e9c145a88d128f&type=track&q=',
    spotify: 'https://api.spotify.com/v1/search?type=track&q=',

    default_picture: 'http://localhost:3000/public/images/users/pictures/default_picture.jpg',
    default_banner: 'http://localhost:3000/public/images/router/banners/default_banner.jpg',
    default_artwork: 'http://localhost:3000/public/images/router/default_artwork.jpg',

    coverage: '/coverage/lcov-report',
    public: '/public',
    doc: '/doc',

    userOne: '58797cdd4d1e021ce864845f',
    userTwo:'58797cdd4d1e021ce8648460',
    userThree: '58797cdd4d1e021ce8648461',
    trackOne:'58797cdd4d1e021ce8648462',
    trackTwo: '58797cdd4d1e021ce8648463',
    trackThree: '58797cdd4d1e021ce8648464',
    matchOne:'58797cdd4d1e021ce8648465',
    matchTwo: '58797cdd4d1e021ce8648466',
    matchThree: '58797cdd4d1e021ce8648467',
    friendOne:'58797cdd4d1e021ce8648468',
    friendTwo: '58797cdd4d1e021ce8648469',
    friendThree: '58797cdd4d1e021ce864846a',
    chatOne: '58797cdd4d1e021ce864846b',
    chatTwo: '58797cdd4d1e021ce864846c',
    chatThree:'58797cdd4d1e021ce864846d',
    postOne: '58797cdd4d1e021ce864846e',
    postTwo: '58797cdd4d1e021ce864846f',
    postThree:'58797cdd4d1e021ce8648470',

};
