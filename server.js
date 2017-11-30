const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (request, response) => response.sendFile('index.html', { root: __dirname + '\\docs' }))
    .use(express.static('docs'))    
    .listen(port, () => console.log('listening on port ' + port));