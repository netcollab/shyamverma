<?php include("header.php");?>

<!-- Magnific Popup core CSS file -->
<link rel="stylesheet" href="./assets-gallery/css/magnific-popup.css">

<!-- jQuery 1.7.2+ or Zepto.js 1.0+ -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<!-- Magnific Popup core JS file -->
<script src="./assets-gallery/js/jquery.magnific-popup.js"></script>
 

	
		
		<div id="maximage">


<div>
				<img src="paintings/Shyam-web.jpg" alt="" />
				
			</div>
</div>


    <section id="infobar" class="drop-shadow lifted span6">
    <div class="container">
        <h1 style="line-height:0px;">Heritage Paintings - Lucknow</h1>
      <div class="clearfix"></div>
    </div>
  </section>
  
   <div class="clearfix"></div>
    
  



<!-- Part 1: Wrap all page content here -->
<section id="wrap">
  <!-- Begin page content -->
  <div class="container ">

	<div class="row-fluid">
	
    <div class="md-col-12 up-heritage">

    <button type="button" class="btn btn-warning"><a href="http://localhost/sverma/heritage-paintings-up.php">Heritage Paintings - UP</a></button>
    <button type="button" class="btn btn-warning"><a href="http://localhost/sverma/heritage-paintings-lucknow.php">Heritage Paintings - Lucknow</a></button>

    </div>

       

<div class="popup-gallery">

 <?php

$dir = "website-gallery/heritage-paintings/Lucknow";

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
      
    	if($file !='.' && $file !='..')
    	{

	      //echo "filename:" . $file . "<br>";
	    ?>

	    

		<a href="website-gallery/heritage-paintings/Lucknow/<?php echo $file ?>" title=""><img src="website-gallery/heritage-paintings/Lucknow/<?php echo $file ?>" width="214" height="200"></a>
		
	<?php
		}

	}
    closedir($dh);
  }
}

?>
	
</div>
     
        
   


<p>&nbsp;</p>


<p>&nbsp;<br />
</div><!-- Row page --> </div><!-- Content page --></section><!-- Wrap page --><!--Info Slide --><!-- Part 1: Wrap all page content here --><!-- Wrap page -->


 <div class="margin-footer"></div>
<!-- Begin page Footer 
<div class="clearfix"></div>-->
<footer>

<!-- Begin page Sub Footer -->
<div id="sub_footer">
  <section id="wrap-footer2"> 
  <div class="container">
   
    <div class="row">
      <div style="padding-top:5px;"  class="span6">
        <p>Copyright &copy; 2005 Shyam Verma</p>
      </div>
      <div style="padding-top:1px; padding-bottom:5px;" class="span6 text-align-right">
                <div class="social_div2"><a href="#" class="pinterest2"><i class="icon-pinterest icon-1x"></i></a> </div>
        		        <div class="social_div2"><a href="#" class="google2"><i class="icon-google-plus icon-1x"></i></a></div>
        		        <div class="social_div2"><a href="#" class="linkedin2"><i class="icon-linkedin icon-1x"></i></a></div>
        		        <div class="social_div2"><a href="#" class="twitter2"><i class="icon-twitter icon-1x"></i></a></div>
                        <div class="social_div2"><a href="#" class="facebook2"><i class="icon-facebook icon-1x"></i></a></div>
        <div class="clearfix"></div>
      </div>
    </div>
    
    
  </div>
  </section>
</div>
</footer>
<script>


$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
});

</script>

 
<?php include("footer.php");?>