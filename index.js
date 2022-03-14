const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connection = require("./database/connection");
connection();

const Post = require("./models/post");

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/post", async (req, res) => {
  try {
    const newImage = await Post.create(req.body);
    newImage.save();
    res.status(201).send("New image uploaded", newImage);
  } catch (error) {
    res.status(409).send({
      message: error.message,
    });
  }
});

app.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("listening at port: " + PORT);
});
