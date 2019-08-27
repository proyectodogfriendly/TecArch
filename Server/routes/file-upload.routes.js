const express = require("express");
const router = express.Router();
const Picture = require("../models/Picture");

const uploader = require("../configs/cloudinary.configs");

router.post("/upload", uploader.array("imageUrl"), (req, res, next) => {
  if (!req.files) {
    next(new Error("No file uploaded!"));
    return;
  }

  let userId = req.body;
  let payload = req.files;

  let pictures = payload.map(
    pic =>
      new Picture({
        imgName: pic.originalname,
        imgPath: pic.url
      })
  );
  let savedImg = pictures.map(picture => picture.save());
  Promise.all(pictures).then(pictures => {
    // console.log(pictures);
    // User.findByIdAndUpdate()
    res.json(pictures);
  });

  res.json({ pictures: pictures });
});

module.exports = router;
