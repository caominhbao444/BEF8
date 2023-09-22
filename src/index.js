const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const route = require("./routes/index");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//Help to read request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(morgan("combined"));

app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
  })
); // Corrected function name
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
