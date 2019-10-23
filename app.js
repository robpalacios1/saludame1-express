const express = require('express');
const app = express();
const nombre2 = null;
const nombre3 = " ";

    if ((nombre2 === null) && (nombre3 === "")){
        app.get('/', (req, res) => {
            res.send(`<h1>Hola desconocido</h1>`)
        });
    }else{
        app.get('/', (req, res) => {
            res.send(`<h1>Hola ${req.query.nombre} ! </h1>`)
        });
    }

app.listen(3000, () => console.log('Listening on port 3000'));