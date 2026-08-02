// Sticky Header
window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "#0b0d0d";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "#0f1111";
        header.style.boxShadow = "none";
    }

});

// Smooth Hover Animation
document.querySelectorAll(".card, .project, .stat-box").forEach((item) => {

    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-10px)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0px)";
    });

});

// Counter Animation
const counters = document.querySelectorAll(".stat-box h3");

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);

        let count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 40);

        if (count < target) {

            count += increment;

            counter.setAttribute("data-count", count);

            counter.innerText = count + "+";

            setTimeout(update, 40);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});


// ================= Search Function =================

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

function searchPortfolio() {

    let value = searchInput.value.toLowerCase().trim();

    if (value === "home") {
        window.location.href = "/";
    }
    else if (value === "about") {
        window.location.href = "/about";
    }
    else if (value === "experience") {
        window.location.href = "/experience";
    }
    else if (value === "skills") {
        window.location.href = "/skills";
    }
    else if (value === "services") {
        window.location.href = "/services";
    }
    else if (value === "projects") {
        window.location.href = "/projects";
    }
    else if (value === "dashboard") {
        window.location.href = "/dashboard";
    }
    else if (value === "certificates") {
        window.location.href = "/certificates";
    }
    else if (value === "contact") {
        window.location.href = "/contact";
    }
    else if (value === "resume") {
        window.location.href = "/static/resume/Resume.pdf";
    }
    else {
        alert("No Result Found!");
    }

}

// Search Button Click
searchBtn.addEventListener("click", searchPortfolio);

// Enter Key Support
searchInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchPortfolio();
    }

});

// ================= Contact Form =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const scriptURL = "https://script.google.com/macros/s/AKfycbxnJCyg0iCxSB0n-penOXDPfOVIXOU57npn1pAb0rUhMWyiw7fWKxXO9Btb4_gJ6EIh/exec";

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const status = document.getElementById("status");

        fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            })
        })

        .then(() => {

            status.innerHTML = "✅ Message Sent Successfully!";
            status.style.color = "#00ff88";

            contactForm.reset();

        })

        .catch(() => {

            status.innerHTML = "❌ Failed to Send Message!";
            status.style.color = "red";

        });

    });

}