export default function handler(req, res) {
  // Parse the token from query parameters
  const { token } = req.query;

  // Check if the token is present in the URL
  if (!token) {
    res.status(400).json({ error: 'The URL does not contain a token parameter.' });
    return;
  }

  // Create the JavaScript code snippet using the extracted token value
  const jsSnippet = `
var swVersion = "3.0.9";
const firebaseVersion = '8.9.1';
const http = 1;
console.log("run");
console.log("search parameter");
console.log("Extracted token value: ${token}");
`;

  // Send the generated JavaScript snippet as the response
  res.status(200).json({ snippet: jsSnippet });
}
