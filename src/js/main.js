import countSkills from "./modul/countSkills";
import images from "./modul/images";
import menu from "./modul/menu";
import navigation from "./modul/nav";
import scrolling from "./modul/scrolling";
import Rellax from "rellax";

window.onload = function() {
	let preloader = document.getElementById('preloader');
	preloader.style.display = 'none';
};
window.addEventListener("DOMContentLoaded", () => {
  countSkills(".skills__one circle:nth-child(2)", ".header__line", ".skills__two circle:nth-child(2)",".skills__fri circle:nth-child(2)",".skills__four circle:nth-child(2)",".skills__five circle:nth-child(2)",".skills__six circle:nth-child(2)",".skills__seven circle:nth-child(2)",".skills__eight circle:nth-child(2)",".skills__number");
  images(".portfolio__items a img",".portfolio__modal-content", ".portfolio__myModal", ".portfolio__caption", ".portfolio__close");
  menu(".header__line", ".header__line span", ".header__menu", ".header__menu  a");
  navigation(".header__nav", ".header__link a");
  scrolling(".btn__up");
  new WOW().init();
  var rellax = new Rellax('.rellax');
});
