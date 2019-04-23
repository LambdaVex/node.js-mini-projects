var socket;
var name;

function sendMsg() {

    console.log("glug");

    if ($("#msg").val() != "") {

        socket.emit('message', $("#msg").val());

        $(".messages").append('<div class="chatMessage"><h1>'+name+'</h1><p>'+$("#msg").val()+'</p></div>');

        $("#msg").val("");

    } else {

        alert("You must enter a message");

    }

}

function setName() {

    if ($("#name").val() != "") {

        $(".overlay").css("display", "none");
        name = $("#name").val();
        socket.emit('name', name);

    } else {

        alert("You must enter a name");

    }

}

$(document).ready(function() {

    socket = io();

    $("#submitName").click(function(){
        setName();
    });

    $("#name").on('keyup', function (e) {

        if (e.keyCode == 13) {
            setName();
        }

    });

    $("#msg").on('keyup', function (e) {

        if (e.keyCode == 13) {
            sendMsg();
        }

    });

    $("#submitMsg").click(function(){

        sendMsg();

    });

    socket.on('message', function(name, msg) {

        $(".messages").append('<div class="chatMessage"><h1>'+name+'</h1><p>'+msg+'</p></div>');

    });

});