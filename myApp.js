let express = require('express');
let app = express();

console.log("Hello World");

// Serve static files from the 'public' directory to the '/public' path
app.use('/public', express.static(__dirname + '/public'));

// Serve the index.html file for the root path
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Serve JSON response for the /json route
app.get('/json', (req, res) => {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = message.toUpperCase();
    }
    res.json({message: message});
});

module.exports = app;