//closeMenu.addEventListener("click", toggleMenu);
menuButton.addEventListener("click", toggleMenu);

function toggleMenu()
{
        let nav = document.getElementById("menuToggle")

        nav.classList.toggle("menuHidden");
        nav.classList.toggle("menuVisible");
}
