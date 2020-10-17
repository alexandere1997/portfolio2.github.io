import navigation from "./modul/nav";
import scrolling from "./modul/scrolling";
import Visual from "./modul/header__canvas";
import hover__link from "./modul/hover";
import "jquery";
import funcScroll from "./modul/scrollBody";
import navBar from "./modul/header__nav";
import animateScroll from "./modul/animateScroll";
import funcAdd from "./modul/addPain";
import funcSkills from "./modul/skillss";

document.body.style.overflow = "hidden";

window.onload = function() {
	let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  document.body.style.overflow = "auto";
};
window.addEventListener("DOMContentLoaded", () => {
  new Visual();
  hover__link(".portfolio__link");
  funcScroll();
  navigation(".header__nav", ".header__link a");
  scrolling(".btn__up");
  navBar(".nav__off", ".nav", ".header__on", ".nav a");
  animateScroll();
  funcAdd();
  funcSkills(".skills__clearfix", ".skills__bar")
});

