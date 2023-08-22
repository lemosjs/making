(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 0);
	};
	function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
		var backToTo = document.querySelector(".scroll-top");
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			backToTo.style.display = "flex";
		} else {
			backToTo.style.display = "none";
		}
	};

	//Get all video tags and start playing them

	var videos = document.getElementsByTagName("video");

	for (var i = 0; i < videos.length; i++) {
		//Play if page is loaded
		videos[i].muted = true;
		videos[i].play();
	}

	





})();

document.body.addEventListener("touchstart", function () {
    var allVideos = document.querySelectorAll('video');
    for (var i = 0; i < allVideos.length; i++) {
        allVideos[i].play();
    }
},{ once: true });
