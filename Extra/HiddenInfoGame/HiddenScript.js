//// Eraser Mini-Game Code! ////
// This mini-game is actually an excercise i have done from pi-book and kept it. Pi-book page is no longer online or moved.
var canvas = document.getElementById('cv');
var page = document.getElementById('pg');
var ctx = canvas.getContext('2d');  
var img = document.createElement('img');

img.onload = function () {
    ctx.beginPath();
    ctx.drawImage(img, 0, 0);
    ctx.closePath();
    // This helps so the existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.
    ctx.globalCompositeOperation = 'destination-out';   
}

//This is the image we delete to reveal the one bellow
img.width = 1280;
img.height = 720;
img.src = "ImgVisible.jpg";

// Takes the x and y point of the cursor and calls the drawing function.
canvas.onmousemove = function(e){
	drawPoint(e.clientX,e.clientY);
}

//This number get incremented everytime a pixel is drawn.
var DrawPercentage = 0;
//The congratulations audio
var CongratulationsSound = new Audio('../Data/music_files/MsBoxCongrationSound.mp3');
// Draws a transparent collor. So the image fades.
function drawPoint(pointX,pointY){
    var grd = ctx.createRadialGradient(pointX, pointY, 0, pointX, pointY, 150);
    //Every time it removes about 50% transparency. I made it like that so it is a bit harder to find the info.
    grd.addColorStop(0, "rgba(255,255,255,.5)");
    grd.addColorStop(1, "transparent");
    ctx.fillStyle = grd;
    ctx.beginPath();
    //The 90 is the brush size.
    // Another time i had even changed the Math.PI multiplication from 2 to 1.2 so its not a circle and has a better effects. Its just math.
    ctx.arc(pointX,pointY,90,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    //Here i increment the DrawPercentage number
    DrawPercentage++;
    //So after enough pixels are drawn and alert will pop up to inform the user that they can download the picture / card postal.
    //It uses equal so it doesnt itterate forever.
    if(DrawPercentage == 1000){
        //Play the congratulations audio sound
        CongratulationsSound.play();
        //Display alert message
        alert("Τα καταφέρατε! Η εικόνα ξεκλειδώθηκε και μπορεί τε να την κατεβάσετε πατώντας το κουμπί που μόλις εμφανίστηκε.");
        //Show/Make the download button visible
        DownloadImgBtn.style.display = "flex";
    }
}

function RedirectToExtra(){
    window.location.href = "../Extra.html"
}