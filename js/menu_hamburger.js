export default function hamburgerMenu(panelBtn, panel) {

    document.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
        }
    });


}