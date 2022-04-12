var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 }, //reference to the associated book
  category: {
    type: String,
    required: true,
    enum: ["Fiction", "Non-fiction", "Romance", "Millitary", "History"],
    default: "Fiction"
  }
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(function () {
  return "/catalog/ge/" + this._id;
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema);
