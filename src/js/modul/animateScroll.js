import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let animateScroll = () => {

  
  if(document.documentElement.clientWidth < 1199){
    return
  }
  else{
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "center center",
        end: "bottom top",
        scrub: true,
        pin: true
      }
    })
    //.from(".about__container", { backgroundColor: "#c59ea8"})
    .from(".about h3", { x: innerWidth * -1 })
    .from(".about p", { x : innerWidth * -1 })
  }

/*skill*/
      if(document.documentElement.clientWidth < 1199){
        return
      }
      else {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".skills",
            start: "center center",
            end: "bottom top",
            scrub: true,
            pin: true
          }
        })
        .from(".skills__box h3", { x: innerWidth * -1 })
        .from(".skills__box p", { x : innerWidth * -1 })
        .from(".fix1", { x : innerWidth * -1 })
        .from(".fix2", { x : innerWidth * -1 })
        .from(".fix3", { x : innerWidth * -1 })
        .from(".fix4", { x : innerWidth * -1 })
        .from(".fix5", { x : innerWidth * -1 })
        .from(".fix6", { x : innerWidth * -1 })
        .from(".fix7", { x : innerWidth * -1 })
        .from(".fix8", { x : innerWidth * -1 })
        .from(".fix9", { x : innerWidth * -1 })
        .from(".fix10", { x : innerWidth * -1 })
        .from(".fix11", { x : innerWidth * -1 })
      }
      



/*portfolio*/

    if(document.documentElement.clientWidth < 1199){
      return
    }
    else{
      gsap.timeline({
        scrollTrigger: {
          trigger: ".portfolio",
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true
        }
      })
      .from(".portLink1", { x : innerWidth * -1, rotate: 360})
      .from(".portLink2", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink3", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink4", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink5", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink6", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink7", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink8", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink9", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink10", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink11", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink12", { x : innerWidth * -1, rotate: 360 })
      .from(".portLink13", { x : innerWidth * -1, rotate: 360 })
    }
      
    /*process*/  

    if(document.documentElement.clientWidth < 1199){
      return
    }
    else{
      gsap.timeline({
        scrollTrigger: {
          trigger: ".process",
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true
        }
      })
      .from(".process__box h3", { x: innerWidth * -1 })
      .from(".proc__item1", { rotate: 360 })
      .from(".proc__item2", { rotate: 360 })
      .from(".proc__item3", { rotate: 360 })
      .from(".proc__item4", { rotate: 360})
      .from(".proc__item5", { rotate: 360 })
      .from(".proc__item6", { rotate: 360 })
      .from(".proc__item7", { rotate: 360 })
      .from(".proc__item8", { rotate: 360})
      .from(".proc__item9", { rotate: 360 })
    }

/*footer */

    if(document.documentElement.clientWidth < 1199){
      return
    }
    else{
      gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true
        }
      })
      .from(".footer__box h3", { x: innerWidth * -1 })
      .from(".footer__box p", { x: innerWidth * -1 })
      .from(".foot__rotate1", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate2", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate3", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate4", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate5", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate6", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate7", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate8", { y : innerHeight * 1, rotate: 360  })
      .from(".foot__rotate9", { y : innerHeight * 1, rotate: 360  })
    }

}


export default animateScroll;