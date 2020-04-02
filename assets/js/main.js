function toggleNav() {
	var toggle = document.getElementById("nav-menu-mobile-toggle");
	var list = document.getElementById("nav-menu-list");
	var hamburger = document.getElementById("nav-icon-mobile-open");
	var x = document.getElementById("nav-icon-mobile-close");
	if (toggle.checked) {
		// Hide menu, show hamburger icon
		list.style.display = "none";
		hamburger.style.display = "inline";
		x.style.display = "none";
	} else {
		// Display menu, show close icon
		list.style.display = "block";
		hamburger.style.display = "none";
		x.style.display = "inline";
	}
}
