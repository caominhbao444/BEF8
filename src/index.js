const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
  })
); // Corrected function name
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/news", function (req, res) {
  res.render("new");
});
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
