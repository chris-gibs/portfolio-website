var slideNumber = 1;
showSlide(slideNumber);

function nextSlide(n) {
  showSlide(slideNumber += n);
}

function showSlide(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) {slideNumber = 1}
  if (n < 1) {slideNumber = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideNumber-1].style.display = "block";  
}