$(document).ready(function () {

    $("#btn-add").click(function () {
        $("#box").toggleClass("addedClass");
    });

    $("#btn-pos").click(function () {
        let pos = $("#pos-box").position();
        $("#pos-output").html("Top: " + pos.top + " | Left: " + pos.left);
    });

    $("#btn-animate").click(function () {
        $("#anim-box").animate({
            width: "200px",
            height: "200px",
            padding: "20px",
            opacity: 0.5
        }, 1000);
    });

});
