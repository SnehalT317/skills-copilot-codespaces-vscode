// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express server
const app = express();
// 3. Define a port
const port = 3000;
// 4. Define the routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/comments', (req, res) => res.send('This is the comments page'));
// 5. Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// 6. Run the server
// node comments.js
// Open browser and go to http://localhost:3000
// 7. Stop the server
// Ctrl + C