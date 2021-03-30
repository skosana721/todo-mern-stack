const express = require("express");
const app = express();
const { todoListApi } = require("./route/api/todo");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
todoListApi(app);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
