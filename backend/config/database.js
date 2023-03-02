const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    })
    .then((data) => {
      console.log(`Mongo Db Connected With Server: ${data.connection.host} `);
    });
};

module.exports = connectDatabase;