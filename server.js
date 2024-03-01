const corsAnywhere = require("cors-anywhere");

const host = "localhost";
const port = 8888;

// Start the CORS Anywhere server.
corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server is running on http://${host}:${port}`);
  });
