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
    console.log(req.body)
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
      arr.push([val.name, val.userName]);
    });
    res.json({ names: arr });
    return;
  } catch (e) {
    res.json({ error: "Something went wrong" });
    return;
  }
});

router.post("/api/addimagetouser", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.find({ name: req.body.name });
  } catch (e) {
    res.json({ error: "Something went wrong when adding image" });
    return;
  }
});

router.post("/api/addpost", async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body
    const userName = data.userName
    const user = await User.findOne({userName})
    if(user){
      if(data.post.caption == undefined){
        const user = await User.findOneAndUpdate({userName},{$push:{posts:{caption:""}}})
        user.save()
        res.json("Succesfull")
      }
      else{
        const user = await User.findOneAndUpdate(
          { userName },
          { $push: { posts: { caption: data.post.caption } } }
        );
        user.save();
        res.json("Succesfull");
      }
    }
    else{
      if(data.post.caption == undefined){
        const user = new User({userName,name:data.name,info:data.info,posts:[{caption:""}]})
        user.save()
        res.json("Succesfull")

      }
      else{
        const user = new User({
          userName,
          name: data.name,
          info: data.info,
          posts: [{ caption: data.post.caption }],
        });
        user.save();
        res.json("Succesfull");
      }
    }
  } catch (e) {
    console.log(e);
    res.json("Error");
  }
});

app.use(router);

app.listen(3100, () => {
  console.log("Server is up");
});
