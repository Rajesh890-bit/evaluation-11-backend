const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
// const productRouter = require("./routes/product.route")

require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/users", userRouter);

// app.use(auth);
// app.use("/emi", emiRoute);

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to Mongo Atlas");
  } catch (err) {
    console.log(err);
    console.log("Couldn't connect to Mongo Atlas");
  }
  console.log(`Server started on port ${process.env.port}`);
});
