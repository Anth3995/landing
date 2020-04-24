$( document ).ready(function() {
    new WOW().init();
});

$(document).ready(function() {

  	$('#Reviews').slick({
    	autoplay: true,
    	mobileFirst: true,
    	dots: true,
    	swipeToSlide: true,
    	arrows: false,
    	responsive: [
    		{
      			breakpoint: 650,
      			settings: {
        			arrows: true,
        			// centerMode: true,
        			centerPadding: '40px',
        			slidesToShow: 2,
        			dots: true
      			}
    		},
    		{
      			breakpoint: 800,
      			settings: {
        			arrows: true,
        			// centerMode: true,
        			centerPadding: '40px',
        			slidesToShow: 3,
        			dots: true
      			}
    		}
    	]
  	});
});