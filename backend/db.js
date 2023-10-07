const Mongoose = require("mongoose")
const localDB = "mongodb+srv://xumoyuntheboy:3i5o3Y1RsPL6X4qq@cluster0.ect3o6e.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
}

module.exports = connectDB 