const controller = require('./post.controller');
const router = require('express').Router();
const status = require('../util/status');

/**
 * @api {post} /posts Post Post
 * @apiGroup Posts
 * @apiParamExample {json} Input
 {
    owners: [58797cdd4d1e021ce864845f, 58797cdd4d1e021ce8648450],
    comments: [{author: 58797cdd4d1e021ce864845f, text: 'Hello World'}],
 }
 * @apiSuccess Object{} post
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846b",
     "updated": "2017-01-16T02:44:54.106Z",
     "__v": 0,
     "comments": [
         {
             "relative": "a few seconds ago",
             "updated": "2017-01-16T02:44:54.107Z",
             "author": "58797cdd4d1e021ce864845f",
             "text": "Hello World",
             "_id": "587c33a6db609215244cf292"
         }
     ],
     "owners": [
         {
             "_id": "58797cdd4d1e021ce864845f",
             "email": "red@email.com",
             "password": "test",
             "username": "red",
             "fullname": "red color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         },
         {
             "_id": "58797cdd4d1e021ce8648460",
             "email": "yellow@email.com",
             "password": "test",
             "username": "yellow",
             "fullname": "yellow color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         }
     ]
 }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/', (req, res) => {
    controller
        .make(req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

/**
 * @api {get} /posts/:key Get Post
 * @apiGroup Posts
 * @apiParam {key} key Task key
 * @apiSuccess Object{} post
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 {
    "relative": "a few seconds ago",
    "_id": "58797cdd4d1e021ce864846d",
    "updated": "2017-01-16T02:20:37.394Z",
    "__v": 0,
    "comments": [
    {
        "relative": "a few seconds ago",
        "updated": "2017-01-16T02:20:37.394Z",
        "author": "58797cdd4d1e021ce8648461",
        "text": "Hello World",
        "_id": "587c2df51a52911468a727d1"
    }
    ],
    "owners": [
    {
        "_id": "58797cdd4d1e021ce8648461",
        "email": "blue@email.com",
        "password": "test",
        "username": "blue",
        "fullname": "blue color",
        "city": "milwaukee",
        "state": "wi",
        "age": 23,
        "gender": "male",
        "__v": 0,
        "avatar": "http://.../default_picture.jpg",
        "banner": "http://.../default_banner.jpg",
        "aboutme": "Tap to edit your about info"
    },
    {
        "_id": "58797cdd4d1e021ce864845f",
        "email": "red@email.com",
        "password": "test",
        "username": "red",
        "fullname": "red color",
        "city": "milwaukee",
        "state": "wi",
        "age": 23,
        "gender": "male",
        "__v": 0,
        "avatar": "http://.../default_picture.jpg",
        "banner": "http://.../default_banner.jpg",
        "aboutme": "Tap to edit your about info"
    }
}
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/:key', (req, res) => {
    controller
        .lookup(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/:key', (req, res) => {
    controller
        .edit(req.params.key, req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

/**
 * @api {get} /posts/:key/user Get User Posts
 * @apiGroup Posts
 * @apiParam {key} key User key
 * @apiSuccess {Object[]} posts
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 [
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846d",
     "updated": "2017-01-16T02:44:54.135Z",
     "__v": 0,
     "comments": [
         {
             "relative": "a few seconds ago",
             "updated": "2017-01-16T02:44:54.135Z",
             "author": "58797cdd4d1e021ce8648461",
             "text": "Hello World",
             "_id": "587c33a6db609215244cf294"
         }
     ],
     "owners": [
         {
             "_id": "58797cdd4d1e021ce8648461",
             "email": "blue@email.com",
             "password": "test",
             "username": "blue",
             "fullname": "blue color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         },
         {
             "_id": "58797cdd4d1e021ce864845f",
             "email": "red@email.com",
             "password": "test",
             "username": "red",
             "fullname": "red color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         }
     ]
 },
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846c",
     "updated": "2017-01-16T02:44:54.126Z",
     "__v": 0,
     "comments": [
         {
             "relative": "a few seconds ago",
             "updated": "2017-01-16T02:44:54.126Z",
             "author": "58797cdd4d1e021ce8648460",
             "text": "Hello World",
             "_id": "587c33a6db609215244cf293"
         }
     ],
     "owners": [
         {
             "_id": "58797cdd4d1e021ce8648460",
             "email": "yellow@email.com",
             "password": "test",
             "username": "yellow",
             "fullname": "yellow color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         },
         {
             "_id": "58797cdd4d1e021ce8648461",
             "email": "blue@email.com",
             "password": "test",
             "username": "blue",
             "fullname": "blue color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         }
     ]
 },
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846b",
     "updated": "2017-01-16T02:44:54.106Z",
     "__v": 0,
     "comments": [
         {
             "relative": "a few seconds ago",
             "updated": "2017-01-16T02:44:54.107Z",
             "author": "58797cdd4d1e021ce864845f",
             "text": "Hello World",
             "_id": "587c33a6db609215244cf292"
         }
     ],
     "owners": [
         {
             "_id": "58797cdd4d1e021ce864845f",
             "email": "red@email.com",
             "password": "test",
             "username": "red",
             "fullname": "red color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         },
         {
             "_id": "58797cdd4d1e021ce8648460",
             "email": "yellow@email.com",
             "password": "test",
             "username": "yellow",
             "fullname": "yellow color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         }
     ]
 }
 ]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/:key/user', (req, res) => {
    controller
        .listUser(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

/**
 * @api {get} /posts List All Posts
 * @apiGroup Posts
 * @apiSuccess {Object[]} posts
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 [
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846d",
     "updated": "2017-01-16T02:44:54.135Z",
     "__v": 0,
     "comments": [
         {
             "relative": "a few seconds ago",
             "updated": "2017-01-16T02:44:54.135Z",
             "author": "58797cdd4d1e021ce8648461",
             "text": "Hello World",
             "_id": "587c33a6db609215244cf294"
         }
     ],
     "owners": [
         {
             "_id": "58797cdd4d1e021ce8648461",
             "email": "blue@email.com",
             "password": "test",
             "username": "blue",
             "fullname": "blue color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         },
         {
             "_id": "58797cdd4d1e021ce864845f",
             "email": "red@email.com",
             "password": "test",
             "username": "red",
             "fullname": "red color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         }
     ]
 },
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846c",
     "updated": "2017-01-16T02:44:54.126Z",
     "__v": 0,
     "comments": [
         {
             "relative": "a few seconds ago",
             "updated": "2017-01-16T02:44:54.126Z",
             "author": "58797cdd4d1e021ce8648460",
             "text": "Hello World",
             "_id": "587c33a6db609215244cf293"
         }
     ],
     "owners": [
         {
             "_id": "58797cdd4d1e021ce8648460",
             "email": "yellow@email.com",
             "password": "test",
             "username": "yellow",
             "fullname": "yellow color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         },
         {
             "_id": "58797cdd4d1e021ce8648461",
             "email": "blue@email.com",
             "password": "test",
             "username": "blue",
             "fullname": "blue color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         }
     ]
 },
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846b",
     "updated": "2017-01-16T02:44:54.106Z",
     "__v": 0,
     "comments": [
         {
             "relative": "a few seconds ago",
             "updated": "2017-01-16T02:44:54.107Z",
             "author": "58797cdd4d1e021ce864845f",
             "text": "Hello World",
             "_id": "587c33a6db609215244cf292"
         }
     ],
     "owners": [
         {
             "_id": "58797cdd4d1e021ce864845f",
             "email": "red@email.com",
             "password": "test",
             "username": "red",
             "fullname": "red color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         },
         {
             "_id": "58797cdd4d1e021ce8648460",
             "email": "yellow@email.com",
             "password": "test",
             "username": "yellow",
             "fullname": "yellow color",
             "city": "milwaukee",
             "state": "wi",
             "age": 23,
             "gender": "male",
             "__v": 0,
             "avatar": "http://.../default_picture.jpg",
             "banner": "http://.../default_banner.jpg",
             "aboutme": "Tap to edit your about info"
         }
     ]
 }
 ]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/', (req, res) => {
    controller
        .listAll()
        .then(status.pass(res))
        .then(null, status.fail(res));
});

/**
 * @api {delete} /posts/:key Delete Post
 * @apiGroup Posts
 * @apiParam {key} key Task key
 * @apiSuccess Object{} post
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 {
    "relative": "a few seconds ago",
    "_id": "58797cdd4d1e021ce864846d",
    "updated": "2017-01-16T02:20:37.394Z",
    "__v": 0,
    "comments": [
    {
        "relative": "a few seconds ago",
        "updated": "2017-01-16T02:20:37.394Z",
        "author": "58797cdd4d1e021ce8648461",
        "text": "Hello World",
        "_id": "587c2df51a52911468a727d1"
    }
    ],
    "owners": [
    {
        "_id": "58797cdd4d1e021ce8648461",
        "email": "blue@email.com",
        "password": "test",
        "username": "blue",
        "fullname": "blue color",
        "city": "milwaukee",
        "state": "wi",
        "age": 23,
        "gender": "male",
        "__v": 0,
        "avatar": "http://.../default_picture.jpg",
        "banner": "http://.../default_banner.jpg",
        "aboutme": "Tap to edit your about info"
    },
    {
        "_id": "58797cdd4d1e021ce864845f",
        "email": "red@email.com",
        "password": "test",
        "username": "red",
        "fullname": "red color",
        "city": "milwaukee",
        "state": "wi",
        "age": 23,
        "gender": "male",
        "__v": 0,
        "avatar": "http://.../default_picture.jpg",
        "banner": "http://.../default_banner.jpg",
        "aboutme": "Tap to edit your about info"
    }
}
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.delete('/:key', (req, res) => {
    controller
        .remove(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

module.exports = router;
