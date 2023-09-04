const port = 3000,
  express = require("express"), // add the express module to the project
  app = express(); // Assign the express() method to the app constant

app // set up a GET route for the home page
  .get("/", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.send("Hello, Universe!"); // send a response to the client
  })
  .listen(port, () => {
    console.log(
      `The Express.js server has started and is listening on port number: ${port}`
    );
  });
