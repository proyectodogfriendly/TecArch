const express = require("express");
const router = express.Router();

const Competition = require("../models/competition");

//listar los concursos
router.get("/getAllCompetitions", (req, res) => {
  Competition.find()
    .then(comp => {
      res.json(comp);
      console.log(comp);
    })
    .catch(err => console.log("Este es el error" + err));
<<<<<<< HEAD
});
=======
 });

//mostrar detalle de un concurso
>>>>>>> 9ed1db8934f9d7b29f47790018c33614f2373d0a

router.get("/getOneCompetition/:id", (req, res) =>
  Competition.findById(req.params.id)
    .then(theCompetition => res.json(theCompetition))
    .catch(err => console.log(err))
);

//crear un concurso
router.post("/postCompetition", (req, res) =>
  Competition.create(req.body)
    .then(theNewCompetition => res.json(theNewCompetition))
    .catch(err => console.log(err))
);

module.exports = router;
