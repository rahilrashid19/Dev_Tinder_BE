const express = require("express");

const app = express();

// app.get("/users", (req, res, next) => {
//   next();
//   console.log("Ist request received from server for users");
//   //   res.status(200).send("GET request for users to fetch all users");
// });

// app.get("/users", (req, res, next) => {
//   console.log("2nd request received from server for users");
//   //   res.status(200).send("2nd GET request for users to fetch all users");
//   next();
// });

// app.get("/users", (req, res, next) => {
//   console.log("3rd request received from server for users");
//   res.status(200).send("3rd GET request for users to fetch all users");
//   //   next();
// });

// app.use("/users", (req, res) => {
//   console.log("running middleware");
//   res.send("middleware running for the requests");
// });

app.use(
  "/users",
  (req, res, next) => {
    console.log("middleware 1 running for the requests");
    // res.send("middleware 1 running for the requests");
    next();
  },
  (req, res, next) => {
    next();
    console.log("middleware 2 running for the requests");
    // res.send("middleware 2 running for the requests");
  },
  (req, res, next) => {
    console.log("middleware 3 running for the requests");
    // res.send("middleware 3 running for the requests");
    next();
  },
  (req, res, next) => {
    console.log("middleware 4 running for the requests");
    res.send("middleware 4 running for the requests");
    next();
  }
);

app.listen(8000, () => console.log("Server listening on port 8000"));
