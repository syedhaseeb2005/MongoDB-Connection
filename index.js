// import express from 'express'
import mongoose from 'mongoose'


let uri = "mongodb+srv://Syedhaseeb30:Syedhaseeb30@cluster0.w2xr5l7.mongodb.net/"

const connectDB = ()=>{
    console.log('connect data');
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        UseUnifiedTopology: true,
    })
}



connectDB()