const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });

app.use(express.static(__dirname+'/dist/page-tesisII'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/page-tesisII/index.html'));
});

const port = process.env.PORT || '9000';
app.set('port', port);

const server = http.createServer(app);

// listen (start app with node server.js) ==============================================
server.listen(port, () => console.log(`API running on localhost:${port}`));
