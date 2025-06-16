const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welkom op de express API');
});


app.get('/contact', (req, res) => {
    res.json({
        name: "Bob Ross",
        email: "asdf@aol.com",
        phone: "0118-999-881-999-119-725-3"
    });
});


app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100); 
    res.send(randomNumber.toString());
});


app.get('/echo/:word', (req, res) => {
    res.send(req.params.word);
});


app.get('/cat', (req, res) => {
    res.sendFile(path.join(__dirname, 'node js opdrachtimage.jpg')); 
});

app.get('/dog', (req, res) => {
    res.sendFile(path.join(__dirname, 'node js opdrachtimage.jpg')); 
});


app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head><title>About</title></head>
            <body>
                <h1>Over deze API</h1>
                <p>Dit is een voorbeeld-API gemaakt met Express.</p>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Voorbeeld app draait op http://localhost:${port}`);
});