var prevScrollpos2 = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos2 = window.pageYOffset;
  if (prevScrollpos2 > currentScrollPos2) {
    document.getElementById("scroll-up").style.top = "0";
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("scroll-up").style.top = "34rem";
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos2 = currentScrollPos2;
}


