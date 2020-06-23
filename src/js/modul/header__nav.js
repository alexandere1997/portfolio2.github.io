let navBar = (off, selector1, on, arr) => {
  let blockOff = document.querySelector(off),
      blockMenu = document.querySelector(selector1),
      blockOnn = document.querySelector(on),
      linkArr = document.querySelectorAll(arr);

      blockOnn.addEventListener("click", () => {
        blockMenu.style.display = "flex";
        document.body.style.overflow = "hidden";
        blockOnn.style.display = "none";
      });
      blockOff.addEventListener("click", () => {
        blockMenu.style.display = "none";
        document.body.style.overflow = "auto";
        blockOnn.style.display = "block";
      });
      linkArr.forEach(item => {
        item.addEventListener("click", () => {
          blockMenu.style.display = "none";
          document.body.style.overflow = "auto";
          blockOnn.style.display = "block";
        })
      })
}

export default navBar;