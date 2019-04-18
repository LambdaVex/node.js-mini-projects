var socket;

function sendMsg() {

    console.log("glug");

    if ($("#msg").val() != "") {

        socket.emit('message', name, $("#msg").val());

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

    } else {

        alert("You must enter a name");

    }

}

$(document).ready(function() {

    socket = io();
    var name   = "";

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