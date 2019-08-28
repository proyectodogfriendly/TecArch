const express = require("express");
const router = express.Router();

const Proposal = require("../models/proposal");
const User = require("../models/User");

//listar las propuestas
router.get("/getAllProposals", (req, res) => {
  Proposal.find()
    .then(allProposal => {
      res.json(allProposal);
      console.log(allProposal);
    })
    .catch(err => console.log("Este es el error" + err));
});

//mostrar detalle de una propuesta
router.get("/getOneProposal/:id", (req, res) =>
  Proposal.findById(req.params.id)
    .then(theProposal => res.json(theProposal))
    .catch(err => console.log(err))
);

//crear una propuesta
router.post("/postProposal", (req, res) => {
  // console.log(req.body.userId);
  const {
    nameArchitect,
    imageUrl,
    title,
    category,
    description
  } = req.body.theNewProposal;

  Proposal.create({
    nameArchitect,
    imageUrl,
    title,
    category,
    description
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
        res.json({ theNewProposal, user });
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
