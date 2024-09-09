jQuery(function ($) {
	$( document ).ajaxSuccess(function() {
		
		if (typeof window.vc_js === "function") {
		
			window.vc_js();
		}	
	});
	
	$(function() {
	  	$('a[href*=#]').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	  }	);
	});	

    $(function() {
        var header = $("header");
        var cheader = $("#header-container");
        var blogo = $(".black-logo");
        var wlogo = $(".white-logo");
        var tagline = $(".stagline");
 
  
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 160) {
            // header.addClass("scrolled animated fadeInDown");
            header.addClass("sheight") 
            cheader.addClass("scrolled");
            tagline.hide();         
            } else {
            // header.removeClass("scrolled animated fadeInDown");
            header.removeClass("sheight")
            cheader.removeClass("scrolled");
            tagline.show();      
            }
        });  
    });

});


 function displaySearch() { 
    var x = document.getElementById("search");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}  


 