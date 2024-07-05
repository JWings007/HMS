const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
var mongoose = require("mongoose");
var mongoDB = process.env.MONGODB_URI;
const AuthRouter = require("./routes/auth");
const UserRouter = require("./routes/update");

mongoose.connect(mongoDB).then((res) => {
  console.log("Database connected successfully..");
});

mongoose.set("strictQuery", false);

const allowedOrigins = [
  process.env.FRONTEND_URL
];

// CORS options to match exact origins
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

//Routes

app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);

app.listen(process.env.PORT, () => {
  console.log("Server started at port " + process.env.PORT);
});
