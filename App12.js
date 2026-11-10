
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Display registration form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    console.log(`Username: ${username}, Email: ${email}`);

    res.send('Registration successful!');
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
