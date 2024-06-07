const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL to extract the query parameters
  const parsedUrl = url.parse(req.url, true);
  const tokenValue = parsedUrl.query.token;

  // Check if the token is present in the URL
  if (!tokenValue) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('The URL does not contain a token parameter.');
    return;
  }

  // Create the JavaScript code snippet using the extracted token value
  const jsSnippet = `
var swVersion = "3.0.9";
const firebaseVersion = '8.9.1';
const http = 1;
console.log("run");
console.log("search parameter");
console.log("Extracted token value: ${tokenValue}");
`;

  // Send the generated JavaScript snippet as the response
  res.writeHead(200, { 'Content-Type': 'application/javascript' });
  res.end(jsSnippet);
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
