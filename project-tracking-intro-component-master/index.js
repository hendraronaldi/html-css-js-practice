var showMenu = false;

function toggle() {
    if(screen.width <= 375) {
        if(showMenu) {
            document.getElementById("nav-menu").style.display = "none";
            document.getElementById("toggle-menu").style.display = "inline-block";
            document.getElementById("toggle-close").style.display = "none";
        } else {
            document.getElementById("nav-menu").style.display = "inline-block";
            document.getElementById("toggle-menu").style.display = "none";
            document.getElementById("toggle-close").style.display = "inline-block";
        }
        showMenu = !showMenu;
    }
}