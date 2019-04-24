const moongoose = require("mongoose");
require("dotenv").config();

moongoose.Promise = global.Promise;

const uri = `mongodb+srv://nicholasmiron:${
  process.env.MONGO_DB_PASSWORD
}@cluster0-ouctt.mongodb.net/products?retryWrites=true`;
moongoose.connect(uri, { useNewUrlParser: true });

const dbSchema = moongoose.Schema({
  name: "String",
  price: "Number",
  bulletOne: "String",
  bulletTwo: "String",
  bulletThree: "String",
  sellerName: "String",
  description: "String",
  productID: "Number"
});

const Desc = moongoose.model("Desc", dbSchema);

const getOneByName = productName =>
  Desc.findOne({ name: { $regex: productName, $options: "gi" } });

const getSomeByPartialName = partialName => {
  const regex = `${partialName}` + "\\w{0,}";
  return Desc.find({ name: { $regex: regex, $options: "gi" } }).limit(5);
};

module.exports = {
  getOneByName,
  getSomeByPartialName
  // addNew, getOneById, getOneByName, getAll, updateEntry, removeEntry, massAddNew,
};
