const mongoose = require('mongoose');
const dbPath = 'mongodb+srv://rva:123@cluster0-01u1a.mongodb.net/RVA?retryWrites=true&w=majority';

mongoose.connect(dbPath, {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;