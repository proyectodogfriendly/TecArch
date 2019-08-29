const express = require("express");
const router = express.Router();

const Competition = require("../models/competition");
const User = require("../models/User");

//listar los concursos
router.get("/getAllCompetitions", (req, res) => {
  Competition.find()
    .populate("imageUrl")
    .then(comp => {
      res.json(comp);
      console.log(comp);
    })
    .catch(err => console.log("Este es el error" + err));
});

//mostrar detalle de un concurso

router.get("/getOneCompetition/:id", (req, res) =>
  Competition.findById(req.params.id)
    .populate("imageUrl")
    .then(theCompetition => res.json(theCompetition))
    .catch(err => console.log(err))
);

//crear un concurso
router.post("/postCompetition", (req, res) => {
  // console.log(req.body.userId);
  const {
    imageUrl,
    title,
    category,
    description,
    address,
    amount,
    adjudicator,
    state,
    conditions
  } = req.body.theNewCompetition;

  Competition.create({
    imageUrl,
    title,
    category,
    description,
    address,
    amount,
    adjudicator,
    state,
    conditions
  })
    .then(theNewCompetition => {
      console.log(theNewCompetition);
      User.findByIdAndUpdate(
        req.body.userId.data._id,
        {
          $push: {
            pictures: theNewCompetition.imageUrl,
            competition: theNewCompetition._id
          }
        },
        { new: true }
      ).then(user => {
        console.log(theNewCompetition, user);
        res.json({ theNewCompetition, user });
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
