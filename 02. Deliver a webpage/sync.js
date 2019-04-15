const http = require('http');
const fs   = require('fs');

http.createServer( (req, res) => {

    /*
       We read the file and return it to the client.
     */
    var data = fs.readFileSync("./index.html");
    res.end(data);

}).listen(8584);