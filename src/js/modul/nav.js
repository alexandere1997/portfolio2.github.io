let navigation = (nav, link) => {
  let navBar = document.querySelector(nav);
  let links = document.querySelector(link);


  window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 58) {
      navBar.style.top = "0px";
      console.log(document.documentElement.scrollTop)
    }
    else if(document.documentElement.scrollTop < 58) {
      navBar.style.top = "-60px";
    }
  })
}


export default navigation;