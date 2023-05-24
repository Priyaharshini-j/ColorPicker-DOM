var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 


var colorPicker1 = document.getElementById("colorpicker1");
var colorPicker2 = document.getElementById("colorpicker2");
var colorPicker3 = document.getElementById("colorpicker3");
var colorPicker4 = document.getElementById("colorpicker4");
var colorPicker5 = document.getElementById("colorpicker5");
var colorPicker6 = document.getElementById("colorpicker6");

colorPicker1.addEventListener("change", function(event) {
    handleColorChange(event, colorPicker1);
  });
  
  colorPicker2.addEventListener("change", function(event) {
    handleColorChange(event, colorPicker2);
  });
  
  colorPicker3.addEventListener("change", function(event) {
    handleColorChange(event, colorPicker3);
  });
  colorPicker4.addEventListener("change", function(event) {
    handleColorChange(event, colorPicker4);
  });
  
  colorPicker5.addEventListener("change", function(event) {
    handleColorChange(event, colorPicker5);
  });
  
  colorPicker6.addEventListener("change", function(event) {
    handleColorChange(event, colorPicker6);
  });
  function handleColorChange(event, colorPicker) {
    var selectedColor = event.target.value;
    var parentContainer = colorPicker.parentElement;
    parentContainer.style.background = selectedColor;   
  
  var colorcodeTag = colorPicker.nextElementSibling;
  colorcodeTag.innerHTML = selectedColor;
  }