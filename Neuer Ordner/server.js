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

    res.end("Hello at " + h + ":" + m + ":" + s);

}).listen(8584);