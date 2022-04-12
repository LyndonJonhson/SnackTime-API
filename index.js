const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(3333, () => console.log("Servidor rodando!"));