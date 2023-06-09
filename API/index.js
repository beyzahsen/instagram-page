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
    const user = await User.find({ userName: req.body.userName });
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
      arr.push([val.name, val.userName, val.info.bio]);
    });
    res.json({ names: arr });
    return;
  } catch (e) {
    res.json({ error: "Something went wrong" });
    return;
  }
});

router.post("/api/addposttouser", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { userName: req.body.userName },
      { $push: { posts: { caption: req.body.caption } } }
    );

    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.json({ error: "Something went wrong when adding post" });
  }
});

router.post("/api/deletefromuser", async (req, res) => {
  try {
    console.log(req.body);
    await User.findOneAndUpdate(
      { userName: req.body.userName },
      { $pull: { posts: { _id: req.body.id } } }
    );

    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.json({ error: "Something went wrong when deleting post" });
  }
});

router.post("/api/addpost", async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    if (
      data.userName == undefined &&
      data.name == undefined &&
      data.info.posts == undefined &&
      data.info.followers == undefined &&
      data.info.folllowing == undefined &&
      data.info.bio == undefined
    ) {
      res.json("Error");
      return;
    }
    const userName = data.userName;
    const user = await User.findOne({ userName });
    if (user) {
      if (data.post.caption == undefined) {
        const user = await User.findOneAndUpdate(
          { userName },
          { $push: { posts: { caption: "" } } }
        );
        user.save();
        res.json("Succesfull");
        return;
      } else {
        const user = await User.findOneAndUpdate(
          { userName },
          { $push: { posts: { caption: data.post.caption } } }
        );
        user.save();
        res.json("Succesfull");
        return;
      }
    } else {
      if (data.post.caption == undefined) {
        const user = new User({
          userName,
          name: data.name,
          info: data.info,
          posts: [{ caption: "" }],
        });
        user.save();
        res.json("Succesfull");
        return;
      } else {
        const user = new User({
          userName,
          name: data.name,
          info: data.info,
          posts: [{ caption: data.post.caption }],
        });
        user.save();
        res.json("Succesfull");
        return;
      }
    }
  } catch (e) {
    console.log(e);
    res.json("Error");
    return;
  }
});

app.use(router);

app.listen(3100, () => {
  console.log("Server is up");
});
