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

const projects = {

    vrf: {

        title: "VRF Outdoor Unit Controller",

        image: "assets/images/VRF-ODU.png",

        overview:
            "Developed production firmware for a commercial VRF Outdoor Unit after reverse engineering the original controller.",

        responsibilities: [

            "Reverse engineered controller",

            "Compressor control",

            "EXV control",

            "Outdoor fan control",

            "Sensor monitoring",

            "Multi Indoor Unit communication"

        ],

        technologies:
            "Embedded C • MSPM0 • UART • HVAC"

    },

    washing: {

        title: "Smart Washing Machine",

        image: "assets/images/WashingMachine.png",

        overview:
            "Firmware for automatic load estimation and water filling.",

        responsibilities: [

            "Current sensing",

            "Load estimation",

            "Automatic water filling",

            "Motor control"

        ],

        technologies:
            "Embedded C • Nuvoton • Automation"

    },

    idu: {

        title:"Air Conditioner Indoor Unit",

        image:"assets/images/AC-IDU.png",

        overview:"Reverse engineered indoor controller and developed complete firmware.",

        responsibilities:[

            "IR protocol",

            "BLDC control",

            "Stepper control",

            "Display control"

        ],

        technologies:"Embedded C • HVAC"

    },

    remote:{

        title:"IR Remote Controller",

        image:"assets/images/IR-Remote.png",

        overview:"Custom IR remote hardware and firmware.",

        responsibilities:[

            "PCB Design",

            "IR Encoding",

            "Firmware"

        ],

        technologies:"Embedded C"

    },

    logger:{

        title:"GPS Data Logger",

        image:"assets/images/DataLogger.png",

        overview:"GPS logger with SD Card and Cloud.",

        responsibilities:[

            "GPS",

            "SD Card",

            "MQTT"

        ],

        technologies:"ESP32"

    },

    fuel:{

        title:"Fuel Management System",

        image:"assets/images/FuelManagement.png",

        overview:"Industrial fuel dispensing controller.",

        responsibilities:[

            "Fuel Monitoring",

            "Industrial Automation"

        ],

        technologies:"STM32"

    }

};

function openProject(id){

    const p=projects[id];

    document.getElementById("modalBody").innerHTML=`

        <h2>${p.title}</h2>

        <img src="${p.image}" style="width:100%;border-radius:12px;margin:20px 0;">

        <p>${p.overview}</p>

        <h3>Responsibilities</h3>

        <ul>

            ${p.responsibilities.map(x=>`<li>${x}</li>`).join("")}

        </ul>

        <h3>Technologies</h3>

        <p>${p.technologies}</p>

    `;

    document.getElementById("projectModal").style.display="block";

}

document.querySelector(".close-btn").onclick=function(){

    document.getElementById("projectModal").style.display="none";

};

window.onclick=function(e){

    if(e.target.id==="projectModal")

        document.getElementById("projectModal").style.display="none";

};