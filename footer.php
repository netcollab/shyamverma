<script src="js/custom.js"></script>
<script type="text/javascript">
			
</script>
<script src="js/bootstrap.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
$('.blogslide').bxSlider({
  infiniteLoop: false,
	hideControlOnEnd: true,
  pager: false,
  autoStart: true,
  auto: true,
  pause: 10000,
  speed: 500,
  captions: false
});
$('.contentslide').bxSlider({
  infiniteLoop: true,
	hideControlOnEnd: false,
  pager: false,
  autoStart: true,
  auto: true,
  pause: 5000,
  speed: 500,
  captions: true,
  mode: 'fade',
});
$('.imgslide').bxSlider({
  infiniteLoop: false,
	hideControlOnEnd: true,
  pager: true,
  autoStart: false,
  auto: true,
  pause: 10000,
  speed: 500,
  captions: false,
  easing: null
});
$('#bxslidertest').bxSlider({
  mode: 'vertical',
  slideMargin: 3,
  auto:true,
  controls: false,
  pager: true
}); 
});            
</script>
<script type="text/javascript" src="js/jquery.cycle.all.js"></script>
<script type="text/javascript" src="js/jquery.maximage.js"></script>
<script type="text/javascript" charset="utf-8">
			$(function(){
				$('#maximage').maximage({
					cycleOptions: {
						fx: 'fade',speed: 3000,
						timeout: 500,
						/*prev: '#arrow_left',
						next: '#arrow_right',*/
						pause: 0,
						before: function(last,current){
							if(!$.browser.msie){
								// Start HTML5 video when you arrive
								if($(current).find('video').length > 0) $(current).find('video')[0].play();
							}
						},
						after: function(last,current){
							if(!$.browser.msie){
								// Pauses HTML5 video when you leave it
								if($(last).find('video').length > 0) $(last).find('video')[0].pause();
							}
						}
					},
					onFirstImageLoaded: function(){
						jQuery('#cycle-loader').hide();
						jQuery('#maximage').fadeIn('fast');
					}
				});
	
				// Helper function to Fill and Center the HTML5 Video
				jQuery('video,object').maximage('maxcover');
	
				// To show it is dynamic html text
				jQuery('.in-slide-content').delay(1200).fadeIn();
			});
		</script>	
		
<script src="js/jquery.colorbox-min.js"></script>
<script>
			$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1', transition:"fade"});
				$(".group2").colorbox({rel:'group2', transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"fade"});
			});
</script>
<!-- isotope JS file -->
<script src="wp-content/themes/jedkey/js/jquery.isotope.min.js"></script>

<!-- Menu JS file -->
<!--[if !(IE 8)]><!-->
<script src="js/jquery.meanmenu.js"></script>
<script>
jQuery(document).ready(function () {
    jQuery('header nav').meanmenu();
});
</script>
<!--<![endif]-->

<script>
		$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.animate-content').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});
	</script>

<script src="js/waypoints.min.js"></script>
<script src="js/animate.js"></script>

<!-- Preloader -->
<script type="text/javascript">
	//<![CDATA[
		$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(600).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(600).css({'overflow':'visible'});
			
			
		})
	//]]>
</script> 

<script type="text/javascript" src="js/jquery.hoverdir.js"></script>	
		<script type="text/javascript">
			$(function() {
			
				$(' .da-thumbs > li ').each( function() { $(this).hoverdir(); } );

			});
		</script>
<script type='text/javascript' src='js/jquery.form.min9ee3.js?ver=3.48.0-2013.12.28'></script>

<script type='text/javascript' src='js/scriptsef85.js?ver=3.7'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wc_add_to_cart_params = {"ajax_url":"\/jedkey\/wp-admin\/admin-ajax.php","ajax_loader_url":"\/\/gbthemes.net\/jedkey\/wp-content\/plugins\/woocommerce\/assets\/images\/ajax-loader@2x.gif","i18n_view_cart":"View Cart","cart_url":"http:\/\/gbthemes.net\/jedkey\/?page_id=7","is_cart":"","cart_redirect_after_add":"no"};
/* ]]> */
</script>
<script type='text/javascript' src='js/add-to-cart.min3c94.js?ver=2.1.0'></script>
<script type='text/javascript' src='js/jquery.blockUI.minc8cb.js?ver=2.60'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var woocommerce_params = {"ajax_url":"\/jedkey\/wp-admin\/admin-ajax.php","ajax_loader_url":"\/\/gbthemes.net\/jedkey\/wp-content\/plugins\/woocommerce\/assets\/images\/ajax-loader@2x.gif"};
/* ]]> */
</script>
<script type='text/javascript' src='js/woocommerce.min3c94.js?ver=2.1.0'></script>
<script type='text/javascript' src='js/jquery-cookie/jquery.cookie.mine7f0.js?ver=1.3.1'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wc_cart_fragments_params = {"ajax_url":"\/jedkey\/wp-admin\/admin-ajax.php","fragment_name":"wc_fragments"};
/* ]]> */
</script>
<script type='text/javascript' src='js/cart-fragments.min3c94.js?ver=2.1.0'></script>



</body>

</html>
