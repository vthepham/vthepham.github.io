console.log("Main JS connected");

// Script for loading header and footer html files (global header and footer)
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});


(function() {

    init(); //on page load - show first slide, hidethe rest
  
    function init() {
  
      parents = document.getElementsByClassName('slideshow-container');
  
      for (j = 0; j < parents.length; j++) {
        var slides = parents[j].getElementsByClassName("mySlides");
        var dots = parents[j].getElementsByClassName("dot");
        slides[0].classList.add('active-slide');
        dots[0].classList.add('active');
      }
    }
  
    dots = document.getElementsByClassName('dot'); //dots functionality
  
    for (i = 0; i < dots.length; i++) {
  
      dots[i].onclick = function() {
  
        slides = this.parentNode.parentNode.getElementsByClassName("mySlides");
  
        for (j = 0; j < this.parentNode.children.length; j++) {
          this.parentNode.children[j].classList.remove('active');
          slides[j].classList.remove('active-slide');
          if (this.parentNode.children[j] == this) {
            index = j;
          }
        }
        this.classList.add('active');
        slides[index].classList.add('active-slide');
  
      }
    }
  //prev/next functionality
    links = document.querySelectorAll('.slideshow-container a');
  
    for (i = 0; i < links.length; i++) {
      links[i].onclick = function() {
        current = this.parentNode;
  
        var slides = current.getElementsByClassName("mySlides");
        var dots = current.getElementsByClassName("dot");
        curr_slide = current.getElementsByClassName('active-slide')[0];
        curr_dot = current.getElementsByClassName('active')[0];
        curr_slide.classList.remove('active-slide');
        curr_dot.classList.remove('active');
        if (this.className == 'next') {
  
          if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
            curr_slide.nextElementSibling.classList.add('active-slide');
            curr_dot.nextElementSibling.classList.add('active');
          } else {
            slides[0].classList.add('active-slide');
            dots[0].classList.add('active');
          }
  
        }
  
        if (this.className == 'prev') {
  
          if (curr_slide.previousElementSibling) {
            curr_slide.previousElementSibling.classList.add('active-slide');
            curr_dot.previousElementSibling.classList.add('active');
          } else {
            slides[slides.length - 1].classList.add('active-slide');
            dots[slides.length - 1].classList.add('active');
          }
  
        }
  
      }
  
    }
  })();





// Script for slideshow
// var sliderObjects = [];
// createSliderObjects();

// function plusDivs(obj, n) {
//   var parentDiv = $(obj).parent();
//   var matchedDiv;
//   $.each(sliderObjects, function(i, item) {
//     if ($(parentDiv[0]).attr('id') == $(item).attr('id')) {
//       matchedDiv = item;
//       return false;
//     }
//   });
//   matchedDiv.slideIndex=matchedDiv.slideIndex+n;
//   showDivs(matchedDiv, matchedDiv.slideIndex);
// }

// function createSliderObjects() {
//   var sliderDivs = $('.slider');
//   $.each(sliderDivs, function(i, item) {
//     var obj = {};
//     obj.id = $(item).attr('id');
//     obj.divContent = item;
//     obj.slideIndex = 1;
//     obj.slideContents = $(item).find('.mySlides');
//     showDivs(obj, 1);
//     sliderObjects.push(obj);
//   });
// }

// function showDivs(divObject, n) {
//   debugger;
//   var i;
//   if (n > divObject.slideContents.length) {
//     divObject.slideIndex = 1
//   }
//   if (n < 1) {
//     divObject.slideIndex = divObject.slideContents.length
//   }
//   for (i = 0; i < divObject.slideContents.length; i++) {
//     divObject.slideContents[i].style.display = "none";
//   }
//   divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
// }






// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }