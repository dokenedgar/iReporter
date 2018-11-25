let express = require('express');
let app = express();
//{}
app.get('/', function(req, res){
    //res.status(200).send('OK');
    res.send('Hello Worldy..');
});

app.listen(3030, () => console.log('Listening on Port 3030...'));