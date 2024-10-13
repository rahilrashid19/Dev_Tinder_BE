const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.use(express.json());

app.post("/api/createUser", async (req, res) => {
  // const user = new User({
  //   firstName: "Kevin",
  //   lastName: "Malone",
  //   age: 49,
  //   role: "Accountant",
  // });

  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(401).send("failed to create user");
  }
});

app.get("/api/getUsers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: "Bad request", error: error });
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(8080, () => console.log(`listening on Port 8080`));
  })
  .catch((err) => console.error("Failed to connect to Database", err));
