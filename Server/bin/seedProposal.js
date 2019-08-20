require("dotenv").config();

const mongoose = require("mongoose");

const Proposal = require("../models/proposal");

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

const proposals = [
  {
    nameArchitect: "Miguel de la Serna",
    imageUrl: "lalala",
    title: "Teatro de Alcántara",
    category: "Cultural",
    description: "Ampliación de planta"
  }
];

Proposal.create(proposals, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${proposals.length} proposals`);
  mongoose.connection.close();
});
