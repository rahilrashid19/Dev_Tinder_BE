const userAuth = (req, res, next) => {
  const userName = "Rahil";
  const isCorrectUser = userName === "Rahil";

  if (isCorrectUser) {
    next();
  } else {
    res.status(404).send({ message: "User not found" });
  }
};

module.exports = {
  userAuth,
};
