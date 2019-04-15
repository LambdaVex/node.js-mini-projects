const http = require('http');
const fs   = require('fs');
const url  = require('url'); // Helps us get the path name from the URL 
const path = require('path'); // Allows to extract the file extension from the Path

http.createServer((req, res) => {

    if (req.url == '/') {
        req.url = '/index.html';
    }

    var urlParts = url.parse(req.url);

    // Ignore the '/'
    fs.readFile(urlParts.pathname.substr(1), (err, data) => {
		// Path that doesn't exist on the server 
        if (err) {

            res.writeHead(404); // Not Found
            res.end();
            return;

        }

        var headers = null;
        var fileExtension = path.extname(urlParts.pathname.substr(1));

        switch (fileExtension) {

            case '.html':
                headers = {'Content-Type': 'text/html'};
                break;

            case '.css':
                headers = {'Content-Type': 'text/css'};
                break;

            case '.js':
                headers = {'Content-Type': 'text/javascript'};
                break;

            case '.jpg':
                headers = {'Content-Type': 'image/jpeg'};
                break;

            default:
                headers = {'Content-Type': 'application/octet-stream'};

        }

        res.writeHead(200, headers);
        res.end(data);

    });

}).listen(8584);