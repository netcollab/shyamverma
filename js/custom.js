/*-----------------------------------------------------------------------------------
/*
/* Custom JS
/*
-----------------------------------------------------------------------------------*/


		
	  
/* Start Document */
jQuery(document).ready(function() {


/*----------------------------------------------------*/
/*	Accordion
/*----------------------------------------------------*/
	(function() {

		var $container = $('.acc-container'),
			$trigger   = $('.acc-trigger');

		$container.hide();
		$trigger.first().addClass('active').next().show();

		var fullWidth = $container.outerWidth(true);
		$trigger.css('width', fullWidth);
		$container.css('width', fullWidth);
		
		$trigger.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});

		// Resize
		$(window).on('resize', function() {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width() );
			$container.css('width', $container.parent().width() );
		});

	})();
	
	
	
/*----------------------------------------------------*/
/*	Back To Top Button
/*----------------------------------------------------*/
		var pxShow = 300;//height on which the button will show
		var fadeInTime = 400;//how slow/fast you want the button to show
		var fadeOutTime = 400;//how slow/fast you want the button to hide
		var scrollSpeed = 400;//how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

		jQuery(window).scroll(function(){
			if(jQuery(window).scrollTop() >= pxShow){
				jQuery("#backtotop").fadeIn(fadeInTime);
			}else{
				jQuery("#backtotop").fadeOut(fadeOutTime);
			}
		});
		 
		jQuery('#backtotop a').click(function(){
			jQuery('html, body').animate({scrollTop:0}, scrollSpeed); 
			return false; 
		}); 
		

	
/*----------------------------------------------------*/
/*	Tabs
/*----------------------------------------------------*/

	(function() {

		var $tabsNav    = $('.tabs-nav'),
			$tabsNavLis = $tabsNav.children('li'),
			$tabContent = $('.tab-content');

		$tabsNav.each(function() {
			var $this = $(this);

			$this.next().children('.tab-content').stop(true,true).hide()
												 .first().show();

			$this.children('li').first().addClass('active').stop(true,true).show();
		});

		$tabsNavLis.on('click', function(e) {
			var $this = $(this);

			$this.siblings().removeClass('active').end()
				 .addClass('active');
			
			$this.parent().next().children('.tab-content').stop(true,true).hide()
														  .siblings( $this.find('a').attr('href') ).fadeIn();

			e.preventDefault();
		});

	})();
	
	




/* End Document */
});




/*----------------------------------------------------*/
/*	Isotope Portfolio Filter
/*----------------------------------------------------*/

	$(window).load(function() {

		var $container = $('#portfolio-wrapper');
				$select = $('#filters select');
				
		// initialize Isotope
		$container.isotope({
		  // options...
		  resizable: false, // disable normal resizing
		  // set columnWidth to a percentage of container width
		  //masonry: { columnWidth: $container.width() / 12 }
		});

		// update columnWidth on window resize
		$(window).smartresize(function(){
		  $container.isotope({
			// update columnWidth to a percentage of container width
			//masonry: { columnWidth: $container.width() / 12 }
		  });
		});
		
		
      $container.isotope({
        itemSelector : '.portfolio-item'
      });
	  
	$select.change(function() {
			var filters = $(this).val();
	
			$container.isotope({
				filter: filters
			});
		});
      
      var $optionSets = $('#filters .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
});