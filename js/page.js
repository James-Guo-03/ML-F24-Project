// Global object for CSF data and functions
page = {
	onLoad: function() {
		if (page.pageCategory) {
			console.log("Found page category");
			activeLink = document.getElementById("navbar_" + csf.pageCategory);
			if (activeLink) {
				console.log("Found active link");
				activeLink.classList.add("active");
			}
		}
	}
}

// vim:ts=2: