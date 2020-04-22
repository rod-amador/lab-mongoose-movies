const mongoose = require("mongoose");
const {Schema} = mongoose;

const Movie = new Schema( {
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: "celebrities" }]
}  )

module.exports = mongoose.model("movies", Movie) 