const http = require('http');
const fs   = require('fs');

http.createServer( (req, res) => {

    fs.readFile('./index.html', (err, data) => {

        /* If there's an error we just throw it and crash the application. In a real web server we would handle
           it differently */
        if (err) throw err;

        //We return the file data to the client
        res.end(data);

    });

}).listen(8584);