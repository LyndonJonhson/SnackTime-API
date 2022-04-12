const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log("Servidor rodando!"));