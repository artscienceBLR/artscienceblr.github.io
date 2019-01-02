window.onscroll = function() {scrollFunction()};

var header = document.getElementById("sticky-nav");
var section = document.getElementsByTagName("section")[0];
var brand = document.getElementById("brand");

var sticky = header.offsetTop;


function scrollFunction(){
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-top");
        section.classList.add("pad-top");
        brand.classList.remove("d-none")
    } else {
        header.classList.remove("fixed-top");
        section.classList.remove("pad-top");
        brand.classList.add("d-none")
    }
}
