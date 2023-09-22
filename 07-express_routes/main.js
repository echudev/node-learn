const port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController");

// middlewares
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  console.log("time: " + Date(Date.now()));
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/items/:vegetable", homeController.sendReqParam);
app.post("/", homeController.testingBodyParams);

// error handling
app.use(errorController.logErrors);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
