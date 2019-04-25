const http = require('http');
function checkTime(i) {
    if (i < 10)
        i = "0" + i;

    return i;
}


http.createServer(function(req, res){

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Adds a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);

	// You can do Stuff like
	// console.log('incoming request!'); // When you get a request this will be written on the server terminal  
	// res.write("Got your request"); // Sends back to user 

    res.end("Hello at " + h + ":" + m + ":" + s);

}).listen(8584);