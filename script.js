let cp = document.getElementById("contact-point");
let toggler = document.querySelectorAll(".navbar-toggler");
let contact = document.querySelector("#contact");
let resume = document.getElementById("resume-point");
let resumesection = document.getElementById("resume");
let carousel = document.getElementById("carouselExampleInterval");

console.log(resumesection);

document.addEventListener("click", (e) => {
	if (
		e.target.innerHTML === "Resume" &&
		resumesection.classList.contains("displaynone1")
	) {
		resumesection.classList.remove("displaynone1");
		toggler.forEach((tog) => {
			tog.disabled = true;
		});
	}
});
