const express = require('express')
const app = express()
var server = app.listen(3000,listening);

function listening(){
	console.log("Listening now");
}

app.use(express.static('public'));