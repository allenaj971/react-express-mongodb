const mongoose = require("mongoose");
require('dotenv').config();

// connection parameters check mongodb documentation
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

// uri to connect to our database
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.hufqk.mongodb.net/express-mongodb?retryWrites=true&w=majority`;

// new connection using mongoose
const connection = mongoose.connect(uri, connectionParams).then(
    () => console.log("connected")
).catch((e) =>
    console.log(e)
);

// exporting our connection so we can use it in our server
module.exports = connection;