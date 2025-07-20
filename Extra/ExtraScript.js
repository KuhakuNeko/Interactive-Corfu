//I want my togglers to start closed in this page. So this is what i do. And i start the counters from 1.
$("#Extra1").toggle();
$(InfoToggle1).text("Εμφάνιση κουίζ παιχνιδιού κρυφού αντικιμένου ⮝");
InfoToggle1.classList.add('pressed');
$("#Extra2").toggle();
$(InfoToggle2).text("Εμφάνιση τραγουδίων για διαδραστικό πιάνο ⮝");
InfoToggle2.classList.add('pressed');
$("#Extra3").toggle();
$(InfoToggle3).text("Εμφάνιση έξτρα αναμνηστικών εικόνων ⮝");
InfoToggle3.classList.add('pressed');

// Toggle buttons
let ToggleCounter1 = 1;
$(document).ready(function(){
    $("#InfoToggle1").click(function(){
        //Toggle animation for half a second
        $("#Extra1").toggle(500);
        // Change the text and the color depending of if the paragraphs are visible or not. I have a toggle counter.
        if (ToggleCounter1 % 2 === 0){
            $(InfoToggle1).text("Εμφάνιση κουίζ παιχνιδιού κρυφού αντικιμένου ⮝");
            InfoToggle1.classList.add('pressed')
        }
        else {
            $(InfoToggle1).text("Απόκρυψη κουίζ παιχνιδιού κρυφού αντικιμένου ⮟");
            InfoToggle1.classList.remove('pressed')
        }
        ToggleCounter1++;
    });
});

let ToggleCounter2 = 1;
$(document).ready(function(){
    $("#InfoToggle2").click(function(){
        //Toggle animation for half a second
        $("#Extra2").toggle(500);
        // Change the text depending of if the paragraphs are visible or not. I have a toggle counter
        if (ToggleCounter2 % 2 === 0){
            $(InfoToggle2).text("Εμφάνιση τραγουδίων για διαδραστικό πιάνο ⮝");
            InfoToggle2.classList.add('pressed');
        }
        else {
            $(InfoToggle2).text("Απόκρυψη τραγουδίων για διαδραστικό πιάνο ⮟");
            InfoToggle2.classList.remove('pressed');
        }
        ToggleCounter2++;
    });
});

let ToggleCounter3 = 1;
$(document).ready(function(){
    $("#InfoToggle3").click(function(){
        //Toggle animation for half a second
        $("#Extra3").toggle(500);
        // Change the text depending of if the paragraphs are visible or not. I have a toggle counter
        if (ToggleCounter3 % 2 === 0){
            $(InfoToggle3).text("Εμφάνιση έξτρα αναμνηστικών εικόνων ⮝");
            InfoToggle3.classList.add('pressed');
        }
        else {
            $(InfoToggle3).text("Απόκρυψη έξτρα αναμνηστικών εικόνων ⮟");
            InfoToggle3.classList.remove('pressed');
        }
        ToggleCounter3++;
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


////MiniQuizCode!////
function QuizChecker(){
    //Correct answer counter
    var CorrecAnsaa = 0;
    // Just the number of groups to not change every part of algorithm in case i update the groups/add more question
    var GroupCount = 5;
    //Loops for every answer group. In my case i have 4.
    for(var i = 1; i <= GroupCount; i++) {
        var radios = document.getElementsByName('group'+i);
        //Loops for every single radio (which means answer).
        for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            //Checks if the radio is the correct one and if it is the radio that the visitor selected.
            if(radio.value == "correct" && radio.checked) {
                CorrecAnsaa++;
            }
        }
    }
    //Checking the final results
    if(CorrecAnsaa == GroupCount-1){ 
        document.getElementById("FailureSound").currentTime = 0
        document.getElementById("FailureSound").play() 
        alert("Ωχ! Φαίνεται οτι κάνατε " + (GroupCount-CorrecAnsaa) + " λάθος. \n\nΗ σελίδα θα επαναφερθεί! Αλλά μην τα παρατάτησετε! Ξαναδοκιμάστε!");
    }
    else if (CorrecAnsaa < GroupCount) {
        document.getElementById("FailureSound").currentTime = 0
        document.getElementById("FailureSound").play()
        alert("Ωχ! Φαίνεται οτι κάνατε " + (GroupCount-CorrecAnsaa) + " λάθοι. \n\nΗ σελίδα θα επαναφερθεί! Αλλά μην τα παρατάτησετε! Ξαναδοκιμάστε!");
    }
    else{
        //Plays a happy sound when you find the melody! Thats a very important feature!
        document.getElementById("CongratulationsSound").currentTime = 0
        document.getElementById("CongratulationsSound").play()
        alert("Τα κατάφερατε! \n\nΘα μεταφερθείτε στην σελίδα με την κρυφή πληροφορία!");
        //Redirect to hidden game page
        window.open("HiddenInfoGame/Hidden.html", '_blank').focus();
    }

}