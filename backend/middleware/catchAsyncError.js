module.exports = (params) => (req, res, next) =>
  Promise.resolve(params(req, res, next)).catch(next);
