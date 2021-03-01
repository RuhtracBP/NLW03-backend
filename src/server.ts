import express from 'express';
import path from 'path';
import cors from 'cors';


import 'express-async-errors';

import './database/connection';

import routes from './routes';

import errorHandler from './errors/handlers';


const app = express();

app.use(cors());
app.use(express.json());

//Rota = conjunto
//Recurso = usuario

//Metodos HTTP = GET, POST, PUT, DELETE
//Parametros

//GET = Buscar informaçao(list, item)
//POST = Criando informaçao
//PUT = Editando uma informaçao
//DELETE = Deletando uma informaçao

//Querry Params: http://localhost:3333/users?search=nome&page2
//Route Params:  http://localhost:3333/users/1 (identificar um recurso)
//Body:  http://localhost:3333/users/1 (identificar um recurso)

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);


app.listen(3333);

