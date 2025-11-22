function menu_toogle_intialized() {
    const menu_toggle = document.getElementById("menu-toggle")
    const menu = document.getElementById("menu");

    if (!menu) {
        console.error("Couldn't find menu");
        throw Error()
    }

    if (!menu_toggle) {
        console.error("Couldn't find menu-toggle");
        throw Error()
    }

    menu_toggle.onclick = () => {
        menu.classList.toggle('invisible');
    }
}

