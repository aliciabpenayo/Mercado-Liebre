const express = require('express');
const path = require('path');
const app = express();


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.use(express.static("public"));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get('/registrarse', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
});