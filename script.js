let cp = document.getElementById("contact-point");
let toggler = document.querySelectorAll(".navbar-toggler");
let contact = document.querySelector("#contact");
let resume = document.getElementById("resume-point");
let resumesection = document.getElementById("resume");
let carousel = document.getElementById("carouselExampleInterval");

cp.addEventListener("click", () => {
	if (contact.classList.contains("displaynone")) {
		setTimeout(() => {
			contact.classList.remove("displaynone");
		}, 400);
	}
});

toggler.forEach((element) =>
	element.addEventListener("click", () => {
		if (!contact.classList.contains("displaynone")) {
			contact.classList.add("displaynone");
		}
		if (!resumesection.classList.contains("displaynone1")) {
			resumesection.classList.add("displaynone1");
		}
	})
);
toggler.forEach((element) =>
	element.addEventListener("click", () => {
		if (!contact.classList.contains("displaynone")) {
			contact.classList.add("displaynone");
		}
		if (!resumesection.classList.contains("displaynone1")) {
			resumesection.classList.add("displaynone1");
		}
	})
);

resume.addEventListener("click", () => {
	if (resumesection.classList.contains("displaynone1")) {
		setTimeout(() => {
			resumesection.classList.remove("displaynone1");
		}, 400);
	}
});

toggler.forEach((element) =>
	element.addEventListener("click", () => {
		if (carousel.style.display !== "none") {
			carousel.style.display = "none";
		} else {
			carousel.style.display = "unset";
		}
	})
);
