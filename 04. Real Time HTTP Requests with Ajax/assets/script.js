$(document).ready(function(){

    $.get("http://localhost:8080/load", function(data) {

        if (data != null) {

            $("#docTitle").val(data.title);

            if (data.body != "")
                $("#docBody").text(data.body);

        }

    });

    $("#docBody").focusin(function(){

        if ($(this).data("placeholder") == true) {

            $(this).text("");
            $(this).data("placeholder", false);

        }

    });

    $("#docBody").focusout(function(){

        if ($(this).text() == "") {

            $(this).text("Type your document text here");
            $(this).data("placeholder", true);

        }

    });

    $("button").click(saveDoc);

    setInterval(saveDoc, 5000);

});

function saveDoc() {

    data = {
        title: $("#docTitle").val(),
        body: ""
    };

    if ($("#docBody").text() != "Type your document text here")
        data.body = $("#docBody").text();

    $.post("http://localhost:8080/save", data)
}