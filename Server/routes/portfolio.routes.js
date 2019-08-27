const express = require("express");
const router = express.Router();
const User = require("../models/User");
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
router.post("/postPortfolio", (req, res) => {
  const {
    nameArchitect,
    nameStudio,
    address,
    mail,
    phone,
    description,
    imageUrl
  } = req.body.theNewPortfolio;

  Portfolio.create({
    nameArchitect,
    nameStudio,
    address,
    mail,
    phone,
    description,
    imageUrl
  })
    .then(theNewPortfolio => {
      User.findByIdAndUpdate(
        req.body.userId.data._id,
        {
          $push: {
            pictures: theNewPortfolio.imageUrl,
            portfolio: theNewPortfolio._id
          }
        },
        { new: true }
      ).then(user => {
        console.log(theNewPortfolio, user);
        res.json({ theNewPortfolio, user });
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
