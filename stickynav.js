var navbar = document.getElementById("navbar");
var navOffSetTop = navbar.offsetTop;

// Fix navbar to the top of viewport when reaching its scroll position
// Unfix it when scrolling above its original position
function stickyNav() {
  if (window.pageYOffset > navOffSetTop) {
    navbar.classList.add("navbar--fixed");
  } else {
    navbar.classList.remove("navbar--fixed");
  }
}

window.onscroll = function() {stickyNav()};
