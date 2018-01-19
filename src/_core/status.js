module.exports = {

  check: res => (data, error) => res
    .status(data !== undefined ? 200 : 500)
    .json(error !== undefined ? error.message : data),

};
