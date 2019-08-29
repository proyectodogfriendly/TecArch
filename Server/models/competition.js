const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const competitionSchema = new Schema(
  {
    imageUrl: [{ type: Schema.Types.ObjectId, ref: "Picture" }],
    title: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    address: { type: String, require: true },
    amount: { type: Number, require: true },
    adjudicator: { type: String, require: true },
    state: { type: String, require: true },
    conditions: { type: String, require: true },
    proposals: [{ type: Schema.Types.ObjectId, ref: "Proposal" }]
  },
  {
    timestamps: true
  }
);

const Competition = mongoose.model("Competition", competitionSchema);
module.exports = Competition;
