function toggleNav() {
	console.log("toggle nav");
	var toggle = document.getElementById("nav-menu-mobile-toggle");
	if (toggle.checked) {
		// Hide menu, show hamburger icon
		console.log("checked");
	} else {
		// Display menu, show close icon
		console.log("unchecked");
	}
}
