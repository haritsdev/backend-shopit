const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {}).then((con) => {
    console.log(`Mongodb connected with host ${con.connection.host}`);
  });
};

module.exports = connectDatabase;
