// Deletes the welcome message after 5 seconds
setTimeout(function(){
    $('#WelcomeTEXTID').remove();
}, 4000);

// Toggle buttons
let ToggleCounter1 = 0;
$(document).ready(function(){
    $("#InfoToggle1").click(function(){
        //Toggle animation for half a second
        $("#ul1").toggle(500);
        // Change the text and the color depending of if the paragraphs are visible or not. I have a toggle counter.
        if (ToggleCounter1 % 2 === 0){
            $(InfoToggle1).text("Εμφάνιση παραγράφων εξήγησης πλοήγησης ⮝");
            InfoToggle1.classList.add('pressed')
        }
        else {
            $(InfoToggle1).text("Απόκρυψη παραγράφων εξήγησης πλοήγησης ⮟");
            InfoToggle1.classList.remove('pressed')
        }
        ToggleCounter1++;
    });
});

let ToggleCounter2 = 0;
$(document).ready(function(){
    $("#InfoToggle2").click(function(){
        //Toggle animation for half a second
        $("#ul2").toggle(500);
        // Change the text depending of if the paragraphs are visible or not. I have a toggle counter
        if (ToggleCounter2 % 2 === 0){
            $(InfoToggle2).text("Εμφάνιση παραγράφων εξήγησης διαδραστικού βίντεο ⮝");
            InfoToggle2.classList.add('pressed')
        }
        else {
            $(InfoToggle2).text("Απόκρυψη παραγράφων εξήγησης διαδραστικού βίντεο ⮟");
            InfoToggle2.classList.remove('pressed')
        }
        ToggleCounter2++;
    });
});

// Scroll on top function with animation. Happens when the ScrlTopBtn is clicked. It takes almost half a second to go up.
$("#ScrlTopBtn").click(function(){
    $('html, body').animate({scrollTop: '0px'}, 400);
});

// This is for hidding and showing the scroll on top button. And i added a fade out animation.
$('#ScrlTopBtn').hide();
$(window).scroll(function(){
    // .scrollTop checks how far the page is from top
    if ($(window).scrollTop() > 300) {
        $('#ScrlTopBtn').show().fadeIn().show(500);
    }
    else {
        $('#ScrlTopBtn').fadeOut().hide(500);
    }
});
