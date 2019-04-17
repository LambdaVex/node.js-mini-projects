
const express = require('express');
const helmet  = require('helmet');

const app = express();
/* Secure your app against hackers etc. */
app.use(helmet());

/* This will be posted for every the html call */
app.use( (req, res, next) => {

    console.log("Request made at time: ", Date.now());

    next(); // Using Express middleware 

});

/* get http method there are app.post and app.any */
app.get('/', (req, res) => {

	// res.send('hellow world');
    res.sendFile(__dirname + '/index.html');

});

/* This replaces all the mimeTypes we had to write earlier */
/* This will be posted for every file, the site will deliver to the user */
app.use('/assets', (req, res, next) => {

    console.log("Serving a file from the assets directory");

    next();

}, express.static('assets'));

app.listen(8080);