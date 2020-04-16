let navigation = (nav, link) => {
  let navBar = document.querySelector(nav);
  let links = document.querySelector(link);


  window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 58) {
      navBar.style.top = "0px";
    }
    else if(document.documentElement.scrollTop < 58) {
      navBar.style.top = "-57px";
    }
  })
}


export default navigation;