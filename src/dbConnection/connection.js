const mongoose = require("mongoose");

const password = "316sF4xHP4inyloP";
const dbname = "co";
const uri = `mongodb+srv://kevs:${password}@cluster0.k9kck.mongodb.net/${dbname}?retryWrites=true&w=majority`;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

module.exports = main;