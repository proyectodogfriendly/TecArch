const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema(
  {
    nameArchitect: { type: String, require: true },
    nameStudio: { type: String, require: true },
    imageUrl: [{ type: Schema.Types.ObjectId, ref: "Picture" }], //array
    address: { type: String, require: true },
    mail: { type: String, require: true },
    phone: { type: Number, require: true },
    description: { type: String, require: true }
  },
  {
    timestamps: true
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
