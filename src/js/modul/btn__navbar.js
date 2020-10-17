

let funcBtnNavbar = () => {
  let header__toogle = document.querySelector(".header__toogle");
  let header__item = document.querySelector(".header__item");
  let header__out = document.querySelector(".header__out");
  let header__nav = document.querySelector(".header__nav");

  header__toogle.addEventListener("click", () => {
    header__item.classList.add("active");
    header__toogle.style.display = "none";
    header__out.style.display = "flex";
    header__nav.classList.add("active__color")
  })

  header__out.addEventListener("click", () => {
    header__item.classList.remove("active");
    header__toogle.style.display = "flex";
    header__out.style.display = "none";
    header__nav.classList.remove("active__color")
  })
}


export default funcBtnNavbar;