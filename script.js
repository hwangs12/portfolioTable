let cp = document.getElementById("contact-point");
let title = document.getElementById("title");
let toggler = document.querySelectorAll(".navbar-toggler");
let contact = document.querySelector("#contact");
let resume = document.getElementById("resume-point");
let resumesection = document.getElementById("resume");
let carousel = document.getElementById("carouselExampleInterval");
let subbackground = document.getElementById("transparent");
let navbarmenu = document.getElementById("navbarSupportedContent");
let resumeCloseButton = document.getElementById("resume-close-button");
let contactCloseButton = document.getElementById("contact-close-button");

document.addEventListener("click", (e) => {
	if (e.target.id === "resume-link") {
		resumesection.classList.remove("displaynone1");
		document.body.style.background = "rgba(40, 40, 40, 0.8)";
		title.style.opacity = "0.3";
		navbarmenu.style.opacity = "0.3";
		carousel.style.opacity = "0.3";
		navbarmenu.style.pointerEvents = "none";
	}
	if (e.target.id === "resume-close-button") {
		resumesection.classList.add("displaynone1");
		document.body.style.background = "#bed3c3";
		title.style.opacity = "1";
		navbarmenu.style.opacity = "1";
		carousel.style.opacity = "1";
		navbarmenu.style.pointerEvents = "auto";
	}
	if (e.target.id === "contact-link") {
		contact.classList.remove("displaynone");
		document.body.style.background = "rgba(40, 40, 40, 0.8)";
		title.style.opacity = "0.3";
		navbarmenu.style.opacity = "0.3";
		carousel.style.opacity = "0.3";
		navbarmenu.style.pointerEvents = "none";
	}
	if (e.target.id === "contact-close-button") {
		contact.classList.add("displaynone");
		document.body.style.background = "#bed3c3";
		title.style.opacity = "1";
		navbarmenu.style.opacity = "1";
		carousel.style.opacity = "1";
		navbarmenu.style.pointerEvents = "auto";
	}
});
