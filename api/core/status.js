module.exports = {

    pass: (res) => { return (data) => res.status(200).json(data) },

    fail: (res) => { return (error) => res.status(500).json(error.message) },

};