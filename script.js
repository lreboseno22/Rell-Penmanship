$(".login").click(function(){
    $(".front-website").slideDown();    
    $(".start-page").slideUp();    
});

$(".section1").click(function(){
    $(".1").show();
    $(".2").hide();
    $(".3").hide();
    $(".title-page").hide();    
});

$(".section2").click(function(){
    $(".2").show(); 
    $(".1").hide(); 
    $(".3").hide(); 
    $(".title-page").hide(); 
});

$(".section3").click(function(){
    $(".3").show();
	$(".2").hide();
    $(".1").hide();
    $(".title-page").hide();
});

$(".mini-logo").click(function(){
    $(".title-page").show();
    $(".1").hide();
    $(".2").hide();
    $(".3").hide();
});
              
$(".logout").click(function(){
    $(".end-page").show();
    $(".front-website").hide();
    $(".1").hide();
    $(".2").hide();
    $(".3").hide();
});

$(".back").click(function(){
	$(".front-website").fadeIn();
    $(".title-page").fadeIn();
    $(".end-page").fadeOut();
});

//
jQuery(document).ready(function() {
    
var btn = $('#scroll');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
        btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
        });
  });
    });//*