const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Proposal = require("../models/proposal");
const User = require("../models/User");
const Competition = require("../models/competition");

//listar las propuestas
router.post("/getAllProposals", (req, res) => {
  Competition.findById(req.body.competitionId)
    .populate({
      path: "proposals",
      populate: { path: "imageUrl" }
    })
    .then(competition => {
      res.json(competition);
    })
    .catch(err => console.log(err));
});

//mostrar detalle de una propuesta
router.get("/getOneProposal/:id", (req, res) =>
  Proposal.findById(req.params.id)
    .populate("imageUrl")
    .then(theProposal => res.json(theProposal))
    .catch(err => console.log(err))
);

//crear una propuesta
router.post("/postProposal", (req, res) => {
  console.log(req.body);
  const {
    nameArchitect,
    title,
    category,
    description,
    imageUrl
  } = req.body.theNewProposal;

  let pic = imageUrl.map(img => {
    return new mongoose.mongo.ObjectId(img._id);
  });

  Proposal.create({
    nameArchitect,
    title,
    category,
    description,
    imageUrl: pic
  })
    .then(theNewProposal => {
      console.log(theNewProposal);
      User.findByIdAndUpdate(
        req.body.userId.data._id,
        {
          $push: {
            pictures: theNewProposal.imageUrl,
            proposal: theNewProposal._id
          }
        },
        { new: true }
      ).then(user => {
        console.log(theNewProposal, user);

        Competition.findByIdAndUpdate(
          req.body.competitionId,
          {
            $push: {
              proposals: theNewProposal._id
            }
          },
          { new: true }
        ).then(competition => {
          res.json({ theNewProposal, user, competition });
        });
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
