require("dotenv").config();

const mongoose = require("mongoose");

const Competition = require("../models/competition");

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

const competitions = [
  {
    imageUrl: "lalala",
    title: "lalala",
    category: "lalala",
    description: "lalala",
    address: "lalala",
    amount: 250,
    adjudicator: "lalala",
    state: "open",
    conditions: "lalala"
  },
  {
    imageUrl: "lalala2",
    title: "lalala2",
    category: "lalala2",
    description: "lalala2",
    address: "lalala2",
    amount: 2500,
    adjudicator: "lalala2",
    state: "close",
    conditions: "lalala2"
  }
];

Competition.create(competitions, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${competitions.length} competitions`);
  mongoose.connection.close();
});
