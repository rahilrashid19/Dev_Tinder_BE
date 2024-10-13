const express = require("express");
const { adminAuth } = require("./middleware/auth");
const { checkError } = require("./middleware/checkError");
const { userAuth } = require("./middleware/userAuth");

const app = express();

app.use("/admin", adminAuth);

app.use("/getAllUsers", userAuth);

app.get("/admin/allUsers", (req, res) => {
  res.send("All users fetched from server successfully");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User deleted successfully");
});

app.get("/characters", (req, res) => {
  throw new Error("something is wrong");
  res.send("characters fetched from server successfully");
});

app.get("/getAllUsers", (req, res) => {
  res.send("All users downloaded");
});

app.use("/", checkError);

app.listen(8080, () => console.log("server listening on port 8080"));
