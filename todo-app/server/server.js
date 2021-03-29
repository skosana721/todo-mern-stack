const express = require("express");
const app = express();
const router = require("./route/api/todo");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
