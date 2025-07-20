// Scroll on top function with animation. Happens when the ScrlTopBtn is clicked. It takes almost half a second to go up.
$("#ScrlTopBtn").click(function(){
    $('html, body').animate({scrollTop: '0px'}, 400);
});

// This is for hidding and showing the scroll on top button. And i added a fade out animation.
$('#ScrlTopBtn').hide();
$(window).scroll(function(){
    // .scrollTop checks how far the page is from top
    if ($(window).scrollTop() > 650) {
        $('#ScrlTopBtn').show().fadeIn().show(500);
    }
    else {
        $('#ScrlTopBtn').fadeOut().hide(500);
    }
});