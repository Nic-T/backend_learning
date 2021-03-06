const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  let path = req.url;
  switch (path) {
    case "/":
      fs.createReadStream("index.html").pipe(res);
      break;

    case "/about":
      fs.createReadStream("about.html").pipe(res);
      break;

    case "/contact-me":
      fs.createReadStream("contact-me.html").pipe(res);
      break;

    default:
      fs.createReadStream("404.html").pipe(res);
      break;
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
