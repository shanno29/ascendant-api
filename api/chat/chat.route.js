const controller = require('./chat.controller');
const router = require('express').Router();
const auth = require('express-jwt-token');
const status = require('../util/status');

/**
 * @api {post} /chats Post Chat
 * @apiGroup Chats
 * @apiParamExample {json} Input
 {
    owners: [58797cdd4d1e021ce864845f, 58797cdd4d1e021ce8648450],
    messages: [{author: 58797cdd4d1e021ce864845f, text: 'Hello World'}],
 }
 * @apiSuccess Object{} chat
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846b",
     "updated": "2017-01-16T02:44:54.106Z",
     "__v": 0,
     "messages": [
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
router.post('/', auth.jwtAuthProtected, (req, res) => {
    controller
        .make(req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

/**
 * @api {get} /chats/:key Get Chat
 * @apiGroup Chats
 * @apiParam {key} key Task key
 * @apiSuccess Object{} chat
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 {
    "relative": "a few seconds ago",
    "_id": "58797cdd4d1e021ce864846d",
    "updated": "2017-01-16T02:20:37.394Z",
    "__v": 0,
    "messages": [
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
router.get('/:key', auth.jwtAuthProtected, (req, res) => {
    controller
        .lookup(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

router.put('/:key', auth.jwtAuthProtected, (req, res) => {
    controller
        .edit(req.params.key, req.body)
        .then(status.pass(res))
        .then(null, status.fail(res));
});


/**
 * @api {get} /chats/:key/user Get User Chats
 * @apiGroup Chats
 * @apiParam {key} key User key
 * @apiSuccess {Object[]} chats
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 [
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846d",
     "updated": "2017-01-16T02:44:54.135Z",
     "__v": 0,
     "messages": [
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
     "messages": [
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
     "messages": [
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
router.get('/:key/user', auth.jwtAuthProtected, (req, res) => {
    controller
        .listUser(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

/**
 * @api {get} /chats List All Chats
 * @apiGroup Chats
 * @apiSuccess {Object[]} chats
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 [
 {
     "relative": "a few seconds ago",
     "_id": "58797cdd4d1e021ce864846d",
     "updated": "2017-01-16T02:44:54.135Z",
     "__v": 0,
     "messages": [
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
     "messages": [
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
     "messages": [
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
router.get('/', auth.jwtAuthProtected, (req, res) => {
    controller
        .listAll()
        .then(status.pass(res))
        .then(null, status.fail(res));
});

/**
 * @api {delete} /chats/:key Delete Chat
 * @apiGroup Chats
 * @apiParam {key} key Task key
 * @apiSuccess Object{} chat
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *
 {
    "relative": "a few seconds ago",
    "_id": "58797cdd4d1e021ce864846d",
    "updated": "2017-01-16T02:20:37.394Z",
    "__v": 0,
    "messages": [
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
router.delete('/:key', auth.jwtAuthProtected, (req, res) => {
    controller
        .remove(req.params.key)
        .then(status.pass(res))
        .then(null, status.fail(res));
});

module.exports = router;
