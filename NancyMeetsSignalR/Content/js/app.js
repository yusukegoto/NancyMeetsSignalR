$(function () {
    $.connection.hub.url = "/signalr";

    var chat = $.connection.myHub;

    chat.client.addMessage = function (name, message) {
        var encodedName = $('<div />').text(name).html();
        var encodedMsg = $('<div />').text(message).html();
        $('#discussion').append('<li><strong>' + encodedName
            + '</strong>:&nbsp;&nbsp;' + encodedMsg + '</li>');
    };
    $('#displayname').val(prompt('Enter your name:', ''));
    $('#message').focus();
    $.connection.hub.start().done(function () {
        $('#sendmessage').click(function () {
            chat.server.send($('#displayname').val(), $('#message').val());
            $('#message').val('').focus();
        });
    });
});