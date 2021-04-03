console.log("Main JS connected");

// Script for loading header and footer html files (global header and footer)
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

// Script for slideslow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex +=n);
}