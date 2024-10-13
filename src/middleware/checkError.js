const checkError = (err, req, res, next) => {
  if (err) {
    res.status(400).send({ message: "404 not found" });
  } else {
    next();
  }
};

module.exports = {
  checkError,
};
