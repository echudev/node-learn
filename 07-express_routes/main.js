const port = 3000,
  express = require("express"),
  app = express();

// middleware
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  console.log("time: " + Date(Date.now()));
  next();
});

// route
app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
