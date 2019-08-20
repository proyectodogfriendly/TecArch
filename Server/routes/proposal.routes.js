const express = require("express");
const router = express.Router();

const Proposal = require("../models/proposal");

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
router.post("/postProposal", (req, res) =>
Proposal.create(req.body)
    .then(theNewProposal => res.json(theNewProposal))
    .catch(err => console.log(err))
);

module.exports = router;
