const express = require('express');
const request = require('request');
const app = express();

// Proxy route
app.get('/proxy', (req, res) => {
  // Get the URL to proxy from the query parameters
  const url = req.query.url;
  // Make a request to the URL using the `request` package
  request(url, (error, response, body) => {
    if (error) {
      // Return an error if there was a problem with the request
      console.error(error);
      res.status(500).send('Error fetching URL');
    } else if (response.statusCode >= 400) {
      // Return an error if the response status code indicates an error
      console.error(`Error fetching URL: ${response.statusCode}`);
      res.status(500).send(`Error fetching URL: ${response.statusCode}`);
    } else {
      // Extract the final URL after any redirects
      const finalUrl = response.request.uri.href;
      // Send the response with the final URL
      res.send(finalUrl);
    }
  });
});

// Start the server on port 3000
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
