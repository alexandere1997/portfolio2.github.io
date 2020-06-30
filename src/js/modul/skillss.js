let funcSkills = (selectorWitch, selectorBar) => {
    const skills__widtch = document.querySelectorAll(selectorWitch),
          skills__bar = document.querySelectorAll(selectorBar);


          window.addEventListener("scroll", () => {
            if(document.documentElement.clientWidth < 1920 && document.documentElement.clientWidth > 1199){
                if(document.documentElement.scrollTop < 2500) {
                    skills__widtch.forEach((items, index1) => {
                        skills__bar.forEach((count, index2) => {
                            if(index1 === index2) {
                                  count.style.width = ""
                            }
                        })
                    });
                }
                else if(document.documentElement.scrollTop > 2500) {
                    skills__widtch.forEach((items, index1) => {
                        skills__bar.forEach((count, index2) => {
                            if(index1 === index2) {
                                  count.style.width = items.dataset.percent
                            }
                        })
                    });
            }
            }

            else if(document.documentElement.clientWidth < 1199) {
                if(document.documentElement.scrollTop < 1200) {
                    skills__widtch.forEach((items, index1) => {
                        skills__bar.forEach((count, index2) => {
                            if(index1 === index2) {
                                  count.style.width = ""
                            }
                        })
                    });
                }
                else if(document.documentElement.scrollTop > 1200) {
                    skills__widtch.forEach((items, index1) => {
                        skills__bar.forEach((count, index2) => {
                            if(index1 === index2) {
                                  count.style.width = items.dataset.percent
                            }
                        })
                    });
            }
            }
          })

}


export default funcSkills;