import express from "express";
import registerRoute from "./routes/register.route.js";
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log("Server live on port " + port);
});

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/", (req, res) => {
  res.send("Connected!");
});

app.use("/", registerRoute);
