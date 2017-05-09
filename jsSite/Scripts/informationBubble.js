//jQuery(document).ready(function () {
//    jQuery('#hideshow').on('click', function (event) {
//        jQuery('#info').toggle('fast');
//    });
//});

//$(function () {
//    $('#info').removeClass('hidden');
//});

//$(document).ready(function () {
//    $("button").click(function () {
//        $("#info").toggle();
//    });
//});

$(document).ready(function () {
    $(function () {
        $("#info").hide();
        $("button").click(function () {
            $("#info").toggle(1000);
        });
    });
});