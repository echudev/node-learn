const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

// listen for incoming requests
app.on("request", (req, res) => {
  var body = []; // create an array to hold the request body data
  req.on("data", (bodyData) => {
    // every time a data chunk arrives
    body.push(bodyData); // add it to the array
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString(); // concatenate the body data
    console.log(`Request Body Contents: ${body}`); // log it out
  });

  // console.log(req.method); // log the request method
  // console.log(req.url); // log the requested URL
  // console.log(req.headers); // log the request header object

  res.writeHead(httpStatus.OK, {
    // set the response header
    "Content-Type": "text/html",
  });
  let responseMessage = "<h1>This will show on the screen.</h1>";
  res.end(responseMessage); // send the response
});

app.listen(port); // listen for incoming requests on the specified port
console.log(`The server has started and is listening on port number: ${port}`);
