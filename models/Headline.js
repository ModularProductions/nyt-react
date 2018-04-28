const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const headlineSchema = new Schema({
  id: { type: [String], required: true },
  headline: { type: String, required: true },
  snippet: { type: String },
  datePublished: { type: Date },
  url: { type: String },
  dateSaved: { type: Date, default: Date.now },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;