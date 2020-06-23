let funcAdd = () => {
    const painAdd = document.querySelectorAll(".pin-spacer");
    const panelAdd = document.querySelectorAll(".panel")
    if(document.documentElement.clientWidth < 1199){
        panelAdd[1].setAttribute("data-color", "blue");
        panelAdd[2].setAttribute("data-color", "yellow");
        panelAdd[3].setAttribute("data-color", "gray");
        panelAdd[4].setAttribute("data-color", "cornflowerblue");
        panelAdd[5].setAttribute("data-color", "violet");
        panelAdd[6].setAttribute("data-color", "green");
    }
    else{
        painAdd[1].setAttribute("data-color", "blue");
        painAdd[2].setAttribute("data-color", "yellow");
        painAdd[3].setAttribute("data-color", "gray");
        painAdd[4].setAttribute("data-color", "cornflowerblue");
        painAdd[5].setAttribute("data-color", "violet");
        painAdd[6].setAttribute("data-color", "green");
    }
}

export default funcAdd;