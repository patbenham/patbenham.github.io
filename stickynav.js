var navbar = document.getElementById("stickybar");
var navOffSetTop = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset > navOffSetTop) {
    navbar.classList.add("navbar--fixed");
  } else {
    navbar.classList.remove("navbar--fixed");
  }
}

window.onscroll = function() {stickyNav()};
