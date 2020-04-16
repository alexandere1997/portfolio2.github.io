let countSkills = (selector1, btn, selector2, selector3, selector4, selector5, selector6, selector7, selector8, number) => {
  let skillOne = document.querySelector(selector1);
  let skillTwo = document.querySelector(selector2);
  let skillFri = document.querySelector(selector3);
  let skillFour = document.querySelector(selector4);
  let skillFive = document.querySelector(selector5);
  let skillSix = document.querySelector(selector6);
  let skillSeven = document.querySelector(selector7);
  let skillEight = document.querySelector(selector8);

  window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 2604) {
      skillOne.style.strokeDashoffset = "calc(440 - (440 * 87) /100)";
      skillTwo.style.strokeDashoffset = "calc(440 - (440 * 78) /100)";
      skillFri.style.strokeDashoffset = "calc(440 - (440 * 70) /100)";
      skillFour.style.strokeDashoffset = "calc(440 - (440 * 65) /100)";
      skillFive.style.strokeDashoffset = "calc(440 - (440 * 70) /100)";
      skillSix.style.strokeDashoffset = "calc(440 - (440 * 70) /100)";
      skillSeven.style.strokeDashoffset = "calc(440 - (440 * 60) /100)";
      skillEight.style.strokeDashoffset = "calc(440 - (440 * 80) /100)";
    }
  });
}

export default countSkills;
