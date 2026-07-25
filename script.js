const roles = [

    "Embedded Firmware Engineer",

    "Commercial HVAC Developer",

    "Embedded C Developer",

    "IoT Systems Engineer",

    "Hardware Debugging Expert"

];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    }

    else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();

/* ==========================
   Smooth Scroll
========================== */

const header = document.querySelector(".header");

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        const y = target.offsetTop - header.offsetHeight;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });

    });

});