import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

    const connection = mongoose.connection;
    connection.once('open',()=>{
        console.log(`😎 Database connected Now !`)
    })
    connection.on('error',()=>{
        console.log(`⚠️ sorry try again`);
    })
}

module.exports = connectDB