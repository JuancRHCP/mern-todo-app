const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3000;

app.get('/', function (req, res) {
    // res.send() auto-detecta el content-type y lo setea en el header
    // El 2do parametro es una funcion que muestra una página en blanco indicando que la ruta no existe
    res.sendFile('./views/index.html', { root:__dirname })
})

// Fallback route: si la ruta solicitada no matchea ninguna de las anteriores, se ejecuta esta
app.use((req, res) => {
    // TODO Deberia escapar los datos que me mandan
    console.warn(`[${req.ip}] requested a non-existing page: ${req.method} ${req.url}`)
    res.sendFile('./views/404.html', {root:__dirname })
})

// Runs the server
app.listen(3000);