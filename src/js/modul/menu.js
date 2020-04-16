let menu = (btn, line, selector, link) => {
  let btnMenu = document.querySelector(btn);
  let lineMenu = document.querySelectorAll(line);
  let blockMenu = document.querySelector(selector)
  let links = document.querySelectorAll(link)
  lineMenu.forEach(res => {
    btnMenu.addEventListener("click", () => {
      res.classList.toggle("transf");
      blockMenu.classList.toggle("active")
    })
  });

  links.forEach(res => {
    lineMenu.forEach(lin => {
      res.addEventListener("click", () => {
        lin.classList.toggle("transf");
        blockMenu.classList.toggle("active")
      })
    })
  })
}

export default menu;