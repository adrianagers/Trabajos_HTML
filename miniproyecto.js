const express = require('express'),
 app = express(),
 path= require('path');

 app.use(express.static(path.join(__dirname,'/path')));

 app.get('/',(peticion, respuesta)=>{
     respuesta.sendFile(`${__dirname}/views/index.html`);
 });

 app.get('/descripcion',(peticion,respuesta)=>{
     respuesta.sendFile(`${__dirname}/views/descripcion.html`);
 });
 app.get ('/experienciaLaboral',(peticion,respuesta)=>{
     respuesta.sendFile(`${__dirname}/views/experienciaLaboral.html`);
    });
app.get ('/estudiosRealizados',(peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/estudiosRealizados.html`);
    });
app.get ('/aptitudes',(peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
    });
app.get ('/contactos',(peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/contactos.html`);
    });

app.listen(8080);
 console.log('Conectado!!');






 

