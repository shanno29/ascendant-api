module.exports = {

  check: res => (data, error) => res
    .status(error !== undefined ? 500 : 200)
    .json(error !== undefined ? error.message : data),

};
