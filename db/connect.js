
const mongoose = require('mongoose');


const connectionString =
    'mongodb+srv://danyal:1234@cluster0.omcx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = (url) => {

    return mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to the DB...'))
    .catch((err) => console.log(err));
    
}

module.exports = connectDB;
