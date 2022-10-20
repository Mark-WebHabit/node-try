const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("This is a home pagge");
  }
  if (req.url === "/about") {
    return res.end("This is an about page");
  }
  return res.end(`
  <h1>404 not found</h1>
  <a href="/">home</a>
  `);
});
server.listen(5000);
