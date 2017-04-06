
$( document ).ready(function() {
    $(".enterence").addClass("enterence_open");
    $(".img_container").addClass("img_load_animation");

    $(function() {
    //caches a jQuery object containing the header element
    var header = $(".enterence");
    var img_container = $(".img_container");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('enterence_open').addClass("enterence_short");
            img_container.addClass("enterence_short_img");
        } else {
            header.removeClass("enterence_short").addClass('enterence_open');
            img_container.removeClass("enterence_short_img");
        }
    });
});
});


