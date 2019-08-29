const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proposalSchema = new Schema(
  {
    nameArchitect: { type: String, require: true },
    imageUrl: [{ type: Schema.Types.ObjectId, ref: "Picture" }],
    title: { type: String, reference: true },
    category: { type: String, require: true },
    description: { type: String, require: true }
  },
  {
    timestamps: true
  }
);

const Proposal = mongoose.model("Proposal", proposalSchema);
module.exports = Proposal;
