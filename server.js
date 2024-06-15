const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/oauth2/callback', (req, res) => {
    // Handle callback from Discord here
});


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    // Authentication logic here

    // Redirect to dashboard on successful login
    res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
});

app.get('/account', (req, res) => {
    res.sendFile(__dirname + '/account.html');
});

app.get('/files', (req, res) => {
    res.sendFile(__dirname + '/files.html');
});

app.post('/account', (req, res) => {
    // Handle account configuration form submission
});

app.post('/add-account', (req, res) => {
    const { username, email, password } = req.body;
    // Add account logic here
    res.send('Account added successfully!');
});

app.post('/delete-account', (req, res) => {
    const { emailToDelete } = req.body;
    // Delete account logic here
    res.send('Account deleted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
