$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    $(window).scroll(function() {
        if( $(this).scrollTop() > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
            $("nav > div.logo").fadeIn();
            $("nav > div.nav-toggle").fadeIn();
        } else {
            $("nav").removeClass("nav-fixed");
            $("nav > div.logo").fadeOut();
            $("nav > div.nav-toggle").fadeOut();
        }
    });

    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $(".page").toggleClass("active");
    });
});
