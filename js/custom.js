$(function(){
    
    
    //    ======== BANNER SLIDER
    
    $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplaySpeed: 1500,
});

    
      //    ======== People SLIDER
    
    $('.people-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    prevArrow: '.people-prev',
    nextArrow: '.people-next',
    autoplaySpeed: 1500,
});
    
    
    
//    Venubox
     $('.venobox').venobox(); 
    
    //    ================= BACK TO TOP PART ============

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
    });
    
    //    ================= SCROLLING PART ============
  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.back-to-top').fadeIn(800);
        } 
	else {
            $('.back-to-top').fadeOut(800);
        }
        
    //    ================= ADD CLASS STICKY MENU PART ============

        if (scrolling > 500) {
            $('.navbar').addClass('bg');
        } 
        else {
            $('.navbar').removeClass('bg'); 
        }    

         });
    
    
    //animation scroll js

var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});
    
    
    
   // ============= preloader Pare js   ============= 
    
$(window).on('load',function(){
        $('#preloader').delay(500).fadeOut(500);
    }); 


    
    
    
    
});