const express = require('express');

const app = express();

app.get('/rota1',function(req, res){
    res.status(200).send('servidor rodando !!! Rota 1');
});
app.get('/rota2',function(req, res){
    res.status(200).send('servidor rodando !!! Rota 2');
});app.get('/rota3',function(req, res){
    res.status(200).send('servidor rodando !!! Rota 3');
});app.get('/rota4',function(req, res){
    res.status(200).send('servidor rodando !!! Rota 4');
});app.get('/rota5',function(req, res){
    res.status(200).send('servidor rodando !!! Rota 5');
});

app.listen(3334, ()=> console.log('Servidor Ligado - Rodando na porta 3334'));