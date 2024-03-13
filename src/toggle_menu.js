//closeMenu.addEventListener("click", toggleMenu);
menuButton.addEventListener("click", toggleMenu);

function toggleMenu()
{
        let nav = document.getElementsByClassName("menuHidden")[0]

        nav.classList.toggle("menuHidden");
        nav.classList.toggle("menuVisible");
}
