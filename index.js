var app = require('express')();
var jade = require('jade');
app.set('view engine', 'jade')

//
app.get('/', function(req, res){
    res.render('main', { title: 'Hey', message: 'Hello there!'});
});

app.post('/', function(req,res){
    console.log('Entrou no POST / ');
    res.send('');
});

var port = process.env.PORT || 8080;
app.listen(port, function(data){
    console.log(data);
    console.log('Escutando na porta:'+ port);
});