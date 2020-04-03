//Importando o módulo express.
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
//Instanciando a aplicação.
const app = express();
app.use(cors({
    
}));
//Utiliza o json 
app.use(express.json());
app.use(routes);
//Ouvindo a porta 3333.
app.listen(3333);