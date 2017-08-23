/*----------------------------------------------------*/
/*	Animation
/*----------------------------------------------------*/

$("#infobar h1").css({ opacity: 0 });


$(".social-icon,.sub-icon-team").css({ opacity: 0 });
$(".size-full").css({ opacity: 0 });
//$("footer .span3 .widget").css({ opacity: 0 });
$(".row-fluid .span6 img").css({ opacity: 0 });
$("#infobar h1").animate({'opacity':'1'},3000);
$(".icon1").css({ opacity: 0 });
$(".icon2").css({ opacity: 0 });
$(".icon3").css({ opacity: 0 });
$(".icon4").css({ opacity: 0 });
$(".icon5").css({ opacity: 0 });
$(".imgclient").css({ opacity: 0 });
$(".testimonialanim").css({ opacity: 0 });


$('.social-icon,.sub-icon-team').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.size-full').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
/*
$('footer .span3 .widget').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: '80%'
	}
);
*/
$('.row-fluid .span6 img').waypoint(function() {
  $(this).animate({'opacity':'1'},100);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.icon1').waypoint(function() {
  $(this).animate({'opacity':'1'},200);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.icon2').waypoint(function() {
  $(this).animate({'opacity':'1'},200);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.icon3').waypoint(function() {
  $(this).animate({'opacity':'1'},200);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.icon4').waypoint(function() {
  $(this).animate({'opacity':'1'},200);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.icon5').waypoint(function() {
  $(this).animate({'opacity':'1'},200);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.imgclient').waypoint(function() {
  $(this).animate({'opacity':'1'},200);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);
$('.testimonialanim').waypoint(function() {
  $(this).animate({'opacity':'1'},200);
  $(this).addClass('animated fadeInUp');
}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	}
);


/*
$(document).ready(function() {

    
    $(window).scroll( function(){
    
        $('.social-icon,.sub-icon-team').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.size-full').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInLeft'); 
            }
        }); 
        $('footer .span3 .widget').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.row-fluid .span6 img').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},100);
                $(this).addClass('animated fadeInLeft'); 
            }
        }); 
        $('.icon1').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},200);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.icon2').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},200);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.icon3').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},200);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.icon4').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},200);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.icon5').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},200);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.imgclient').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},200);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
        $('.testimonialanim').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},200);
                $(this).addClass('animated fadeInUp'); 
            }
        }); 
    
    });
    
});
*/