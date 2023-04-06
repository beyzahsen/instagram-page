const express = require("express");
const app = express();
require("./db");
const cors = require("cors");
const User = require("./User");

app.use(express.json());
app.use(cors());

const router = express.Router();

router.post("/api/getuser", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.find({ name: req.body.name });
    console.log(user);
    res.json({ user });
    return;
  } catch (e) {
    res.json({ error: "User doesn't exists" });
    return "Error";
  }
});

router.post("/api/getallusersnames", async (req, res) => {
  try {
    const users = await User.find();
    const arr = [];
    users.map((val, inx) => {
      arr.push(val.name);
    });
    res.json({ names: arr });
    return;
  } catch (e) {
    res.json({ error: "Something went wrong" });
    return;
  }
});

app.use(router);

app.listen(3100, () => {
  console.log("Server is up");
});
