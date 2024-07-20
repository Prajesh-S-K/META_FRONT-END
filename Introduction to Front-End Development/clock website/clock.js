import fs from 'fs';
import http from 'http';


// Import the required modules

// Create a server
const server = http.createServer((req, res) => {
    // Read the HTML file
    fs.readFile('clock.html', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading clock.html:", err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return; // Ensure the function exits after handling the error
        }
    });
});

// Start the server on port 2004
server.listen(3000, () => console.log('Server running on http://localhost:3000'));
