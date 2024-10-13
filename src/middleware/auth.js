const adminAuth = (req, res, next) => {
  console.log("middleware function executing");

  const token = "12321";
  const adminAuth = token === "12321";
  if (adminAuth) {
    next();
  } else {
    res.status(500).send({ messsage: "Something went wrong" });
  }
};

module.exports = {
  adminAuth,
};
