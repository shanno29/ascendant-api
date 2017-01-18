const friend = require('./../friend/friend.model').Friend;
const match = require('./../match/match.model').Match;
const model = require('./track.model').Track;
const request = require('request-promise');
const config = require('../../config');
const combined = require('q');


module.exports = {

    make: (data) => {
        return model
            .create(data);
    },

    lookup: (id) => {
        return model
            .findById(id)
            .populate('owner');
    },

    listFriends: (id) => {
        return friend
            .find({owners: id})
            .then(friends => {
                const ids = [].concat(...friends.map(friend => {
                    return friend.owners.filter(friendId => {if (friendId != id) return friendId});
                }));
                return model.find({owner: {$in: ids}}).sort({updated: -1}).populate('owner');
            });
    },

    listMatches: (id) => {
        return match
            .find({owners: id})
            .then(matches => {
                const ids = [].concat(...matches.map(match => {
                    return match.owners.filter(matchId => {if (matchId != id) return matchId});
                }));
                return model.find({owner: {$in: ids}}).sort({updated: -1}).populate('owner');
            });
    },

    listNearby: (id) => {
        return model
            .find({})
            .sort({updated: -1})
            .populate('owner');
    },

    listUser: (id) => {
        return model
            .find({owner: id})
            .sort({updated: -1})
            .populate('owner');
    },

    listAll: () => {
        return model
            .find({})
            .sort({updated: -1})
            .populate('owner');
    },

    remove: (id) => {
        return model
            .findByIdAndRemove(id);
    },

    search: (query, limit) => {
        return combined
            .allSettled([
            request({uri: config.youtube + query + '&maxResults=' + limit, json: true}).then(response => response.items),
            request({uri: config.soundcloud + query + '&limit=' + limit, json: true}),
            request({uri: config.spotify + query + '&limit=' + limit, json: true}).then(response => response.tracks.items),
        ])
            .then(tracks => {
                return [{youtube: tracks[0].value}, {soundcloud: tracks[1].value}, {spotify: tracks[2].value}]

            });
    },

};
