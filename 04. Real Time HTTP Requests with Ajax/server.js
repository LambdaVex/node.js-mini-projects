const http = require('http');
const fs   = require('fs');
const url  = require('url');
const path = require('path');
const qs   = require('querystring');

var doc = null;

/* Binding the server on port 8584 */
http.createServer((req, res) => {

    if (req.method == 'GET') {

        if (req.url == '/') {

            req.url = '/index.html';

        } else if (req.url == '/load') {

            if (doc == null) {

                res.writeHead(200);
                res.end();

            } else {

                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(doc));

            }

        }

        var urlParts = url.parse(req.url);

        fs.readFile(urlParts.pathname.substr(1), (err, data) => {

            if (err) {

                res.writeHead(404);
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

    } else if (req.method == 'POST') {

        var body = '';

        req.on('data', (data) => {

            body += data;

        });
    	/* Processing data comes in 'end' because otherwise the data might not be there. You can also use res.on('err',(err)=>) */
        req.on('end', () => {
    		/* Parse JSON */
           var postData = qs.parse(body);

           if (Object.prototype.hasOwnProperty.call(postData, 'title') && Object.prototype.hasOwnProperty.call(postData, 'body')) {

               doc = postData;
               res.writeHead(200);
               res.end();

           } else {

               res.writeHead(400);
               res.end();

           }

        });

    }

}).listen(8080);