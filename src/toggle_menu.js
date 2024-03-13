closeMenu.addEventListener("click", toggleMenu);
menuButton.addEventListener("click", toggleMenu);

function toggleMenu()
{
        let nav = document.getElementsByTagName("nav")[0];

        nav.classList.toggle("menuHidden");
        nav.classList.toggle("menuVisible");

	if(window.innerWidth < "600" && window.matchMedia("(orientation: portrait)").matches == true || window.innerWidth < "768" && window.matchMedia("(orientation: landscape)").matches == true)
	{
		if(document.getElementsByClassName("menuHidden")[0] != undefined)
		{
			document.getElementsByClassName("contentBox")[0].style.marginTop = "0px";
		}
		else {
			document.getElementsByClassName("contentBox")[0].style.marginTop = "192px";
		}
	}
	else if(window.innerWidth < "992" && window.matchMedia("(orientation: landscape)").matches == true || window.matchMedia("(orientation: portrait)").matches == true){
		if(document.getElementsByClassName("menuHidden")[0] != undefined)
		{
			document.getElementsByClassName("contentBox")[0].style.marginTop = "0px";
		}
		else {
			document.getElementsByClassName("contentBox")[0].style.marginTop = "50px";
		}
	}
}
