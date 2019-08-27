const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    role: {
      type: String,
      enum: ["ADMIN", "INSTITUTION", "PROFESSIONAL"],
      default: "PROFESSIONAL"
    },
    portfolio: { type: Schema.Types.ObjectId, ref: "Portfolio" },
    competition: { type: Schema.Types.ObjectId, ref: "Competition" },
    pictures: [{ type: Schema.Types.ObjectId, ref: "Picture" }]
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
