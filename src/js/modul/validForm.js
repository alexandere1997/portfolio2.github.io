
let funcValidForm = () => {
  let work__button = document.querySelector(".work__button");
  let work__text = document.querySelector(".work__text");
  let work__email = document.querySelector(".work__email");
  let work__field = document.querySelector(".work__field");

  let btnValid = () => {
    if(work__text.value != "" && work__email.value != "" && work__field.value != ""){
      work__button.removeAttribute("disabled")
    }
  }

  let validInput = () => {
    if(work__text.value == "" && work__email.value == "" && work__field.value == ""){
      work__text.addEventListener("input", () => {
        if(work__text.value == "") {
          work__text.style.border = "1px solid red";
          work__button.setAttribute("disabled", "disabled")
        }
        else {
          work__text.style.border = "1px solid green";
          if(work__text.value != "" && work__email.value != "" && work__field.value != "") {
            work__button.removeAttribute("disabled")
          }
        }
      })
      work__email.addEventListener("input", () => {
        if(work__email.value == "") {
          work__email.style.border = "1px solid red";
          work__button.setAttribute("disabled", "disabled")
        }
        else {
          work__email.style.border = "1px solid green";
          if(work__text.value != "" && work__email.value != "" && work__field.value != "") {
            work__button.removeAttribute("disabled",)
          }
        }
      })
      work__field.addEventListener("input", () => {
        if(work__field.value == "") {
          work__field.style.border = "1px solid red";
          work__button.setAttribute("disabled", "disabled")
        }
        else {
          work__field.style.border = "1px solid green";
          if(work__text.value != "" && work__email.value != "" && work__field.value != "") {
            work__button.removeAttribute("disabled")
          }
        }
      })
    }
  }
  validInput();
}


export default funcValidForm;
