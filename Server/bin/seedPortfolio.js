require("dotenv").config();

const mongoose = require("mongoose");

const Portfolio = require("../models/portfolio");

mongoose
  .connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const portfolios= [
  {
    nameArchitect: "Miguel de la Serna",
    imageUrl: "lalala",
    address: "Maadrid",
    mail: "miguel@gmail.com",
    phone: 612123412,
    description: "Arquitecto con más de 30 años de experiencia"
  },
  {
    nameArchitect: "Marta López",
    imageUrl: "lalala",
    address: "Maadrid",
    mail: "marta@gmail.com",
    phone: 612123412,
    description: "Arquitecto con más de 30 años de experiencia"
  }
];

Portfolio.create(portfolios, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${portfolios.length} portfolios`);
  mongoose.connection.close();
});


