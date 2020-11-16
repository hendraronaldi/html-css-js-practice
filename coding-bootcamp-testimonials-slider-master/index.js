var idShow1 = true;

function toggle() {
    if(idShow1) {
        document.getElementById("container-1").style.visibility = "hidden";
        document.getElementById("container-2").style.visibility = "visible";
    } else {
        document.getElementById("container-1").style.visibility = "visible";
        document.getElementById("container-2").style.visibility = "hidden";
    }
    idShow1 = !idShow1;
}