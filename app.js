const express = require("express");
const { userRouter } = require("./routes/users.routes");
const mySession = require("./config/sessionConfig");

const app = express();
app.use(express.json());
app.use(mySession);
app.use("/", userRouter);

app.listen(8080, () => {
  console.log("app is running");
});
