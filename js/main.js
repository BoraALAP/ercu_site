
$( document ).ready(function() {
	var header = $(".enterence");
    var page_container = $(".page_container");
    
///////// Page Load Animation
    header.addClass("enterence_open");
    page_container.addClass("img_load_animation");
///////// Page Load Animation End
    

///////// Activating Animation on scroll
    $(function() {
    //caches a jQuery object containing the header element
    
   
    $(window).scroll(function() {
        var scroll = $(window).scrollLeft();
        if (scroll >= 20) {
            header.removeClass('enterence_open').addClass("enterence_short");
            page_container.addClass("enterence_short_img");
            $("#triangle").css("animation-play-state", "paused");
            $('.svg').prop('disabled', true);
        } else {
            header.removeClass("enterence_short").addClass('enterence_open');
            page_container.removeClass("enterence_short_img");
            $("#triangle").css("animation-play-state", "running");
            $('.svg').prop('disabled', false);
        }
    });
///////// Activating Animation on scroll End




///////// Arrow Button pushing left to start exploring
	$('.white_overlay').on('mouseenter', function rscroll(){
		$('body').animate({
      		scrollLeft: '+=5'
    	}, 10, rscroll);
	 });
	$('.white_overlay').on('mouseleave', function() {
		$('body').stop();
	});
	// $('.svg').hover(function(){	
	// 	$('html, body').animate({scrollLeft : 400},2500);
	// 	return false;
	// });

///////// Arrow Button pushing left to start exploring End
});
});



