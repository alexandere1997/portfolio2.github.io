let hover__link = (selector) => {
    let hover__elem = document.querySelectorAll(selector);
    hover__elem.forEach(elem => {
        if(document.documentElement.clientWidth < 1199){
            elem.style.opacity = "1";
        }
        else{
            elem.addEventListener("mouseover", () => {
                elem.style.opacity = "1";
            })
            elem.addEventListener("mouseout", () => {
                elem.style.opacity = "0";
            })
        }
    })
}


export default hover__link;