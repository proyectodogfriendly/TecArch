const express = require("express");
const router = express.Router();

const Competition = require("../models/competition");

router.get("/getAllCompetitions", (req, res) => {
  Competition.find()
    .then(
      allTheCompetitions => res.json(allTheCompetitions),
      console.log(allTheCompetitions)
    )
    .catch(err => console.log(err));
});

router.get("/getOneCompetition/:id", (req, res) =>
  Competition.findById(req.params.id)
    .then(theCompetition => res.json(theCompetition))
    .catch(err => console.log(err))
);

router.post("/postCompetition", (req, res) =>
  Competition.create(req.body)
    .then(theNewCompetition => res.json(theNewCompetition))
    .catch(err => console.log(err))
);

module.exports = router;
