const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  profilePic: {
    type: String,
    required: true,
    trim: true,
  },
  info: {
    posts: {
      type: Number,
      required: true,
      trim: true,
    },
    followers: {
      type: Number,
      required: true,
      trim: true,
    },
    following: {
      type: Number,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
  posts: [
    {
      postImage: {
        type: String,
        trim: true,
      },
      caption: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
