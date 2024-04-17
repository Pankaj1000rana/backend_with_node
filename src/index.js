// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./env" });
import {app} from "./app.js";

connectDB().then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at port ${process.env.PORT}`)
  })
}).catch((e)=>{
  console.error("MongoDb connection failed",e);
});

/*
import express from "express";
const app = express();
(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {

      console.log("Error:", error);

      throw new Error("this error from express ");
    });
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (e) {
    console.error("this error from database mongodb", e.message);
    throw new Error("this erro from mongodb");
  }
})();
*/
