var modal = document.getElementById("myModal");
var img = document.getElementById("picture");
var modalImg = document.getElementById("img");

//When the image is clicked change the modal style to block.
//This will make the picture zoom in
img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

//This is for the x icon in the corner. If clicked, reset the modal style to none.
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
	modal.style.display = "none";
}