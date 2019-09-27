const express = require('express');
const app = express();

var mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", function(e) { console.error(e); });

// definimos el schema
var schema = mongoose.Schema({
  name: { type: String, default: "Anónimo" },
  price: { type: Number, default: 1  },
});

var Products = mongoose.model("Products", schema);

app.get("/products", async (req, res) => {
const products = await Products.find({});
res.json(products);
});


app.listen(3000, () => console.log('Listening on port 3000!'));
