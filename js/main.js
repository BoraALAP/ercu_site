
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
        } else {
            header.removeClass("enterence_short").addClass('enterence_open');
            page_container.removeClass("enterence_short_img");
        }
    });
///////// Activating Animation on scroll End


///////// Horizontal Scrolling	
    $(function() {
	   $("body").mousewheel(function(event, delta) {

	      this.scrollLeft -= (delta * 5);
	    
	      event.preventDefault();

	   });
	});
///////// Horizontal Scrolling End

	$('.svg').click(function(){
		
		$('html, body').animate({scrollLeft : 400},2500);
		return false;
	});
});
});



