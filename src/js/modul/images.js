let images = (images, modalImages, modalTab, caption, closes) => {
  let modal = document.querySelectorAll(modalTab),
    img = document.querySelectorAll(images),
    modalImg = document.querySelectorAll(modalImages),
		captionText = document.querySelectorAll(caption),
    close = document.querySelectorAll(closes);
    
    img.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        modal.forEach(modElement => {
          modElement.style.display = 'block';
          modalImg.forEach(modImg => {
            modImg.src = element.getAttribute('src');
          });
          captionText.forEach(capText => {
            capText.innerHTML = element.getAttribute('data-name');
            capText.href = element.getAttribute("alt");
          });
        });
      });
    });
    captionText.forEach(res => {
      res.addEventListener("click", () => {
        modal.forEach(items => {
          items.style.display = "none";
        })
      })
    })
    close.forEach(cls => {
      cls.addEventListener('click', () => {
        modal.forEach(md => {
          md.style.display = 'none';
        });
      });
    });
}

export default images;
