const mongoose = require('mongoose')

const connectDatabase = async () => {
  await mongoose.connect( process.env.DB_URI
  ).then(()=>{
    console.log("Connected to database sucessfully")
  });
}

module.exports = connectDatabase

