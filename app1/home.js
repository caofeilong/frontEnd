$(document).ready(function () {

    $("#username").html(location.search.split("?")[1].split("&")[0].split("=")[1])
    $("#menu").click(clickMenu);
    function clickMenu(event) {
        var src = $(event.target).attr("ifsrc");
        $("#moduleIr").attr("src", src);
    }
});

