const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const app = express();
app.use(express.json());

const connectDB = require("./config/db");
const { userRouter } = require("./routes/user.route");
// const cors = require("cors");
// const coreOptions = {
//     origin: "http://localhost:3000",
//     method: "POST, GET, DELETE, PUT, PATCH, HEAD",
//     credentials: true,
//   };
//   app.use(cors(coreOptions));

//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));


app.use(cors());



app.use('/api',userRouter)




app.listen(PORT,async ()=>{
  try {
    await connectDB
    console.log(`Server started on port ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})






