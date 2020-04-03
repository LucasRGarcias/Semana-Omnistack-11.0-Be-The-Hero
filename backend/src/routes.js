const express =require('express');
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');


//const connection = require('./database/connection');
const routes = express.Router();

//rota  da SessionController
routes.post('/sessions', SessionController.create);

//rotas da ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//rotas da profile
routes.get('/profile', ProfileController.index);

//rotas do incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;




// rotas buscar todos os cadastros ONGS.
//routes.get('/ongs', async(request, response)=>{  
//    const ongs = await connection('ongs').select('*');
//   return response.json(ongs);  

//});

// Rota & Recursos. rota cadastro ONGS.
//routes.post('/ongs', async (request, response)=>{
//   const {name, email, whatsapp, city, uf} = request.body;

//    const id = crypto.randomBytes(4).toString('HEX');

//    await connection('ongs').insert({
       // id,
       // name,
       // email,
       // whatsapp,
       // city,
       // uf,
//    })

    
//    return response.json({id});
//});
