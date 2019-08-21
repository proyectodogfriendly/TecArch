const express = require("express");
const router = express.Router();

const Portfolio = require("../models/portfolio");

//listar los portfolios
router.get("/getAllPortfolios", (req, res) => {
  Portfolio.find()
    .then(port => {
      res.json(port);
      console.log(port);
    })
    .catch(err => console.log("Este es el error" + err));
});

//mostrar detalle de un portfolio

router.get("/getOnePortfolio/:id", (req, res) =>
  Portfolio.findById(req.params.id)
    .then(thePortfolio => res.json(thePortfolio))
    .catch(err => console.log(err))
);

//crear un portfolio desde perfil arquitecto
router.post("/postPortfolio", (req, res) =>
  Portfolio.create(req.body)
    .then(theNewPortfolio => res.json(theNewPortfolio))
    .catch(err => console.log(err))
);

module.exports = router;
