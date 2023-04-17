const express = require("express");
const cors = require("cors");
const PORT = 2000;

const db = require("./models");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const {userRouter, merchantRouter, productRouter} = require("./routers");

app.use("/auth", userRouter);
app.use("/auth", merchantRouter);
app.use("/product", productRouter);

app.listen(PORT, () => {
  // db.sequelize.sync({alter: true});
  console.log(`Server running at port ${PORT}`);
});
