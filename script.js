// =======================================
// LIVE CHANGING TEXT
// =======================================

const words = [
    "CSE Student",
    "Python Learner",
    "Web Development Learner",
    "Java Learner",
    "Problem Solver"
];

const typingElement = document.getElementById("typing-text");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(
            0,
            letterIndex + 1
        );

        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;

            setTimeout(typingEffect, 1400);

            return;
        }

    } else {
        typingElement.textContent = currentWord.substring(
            0,
            letterIndex - 1
        );

        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 85
    );
}

if (typingElement) {
    typingEffect();
}


// =======================================
// SCROLL REVEAL ANIMATION
// =======================================

const revealItems = document.querySelectorAll(
    ".glass-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".contact-card, " +
    ".section-heading"
);

revealItems.forEach(function(item) {
    item.classList.add("reveal");
});

function revealOnScroll() {
    revealItems.forEach(function(item) {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 80) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =======================================
// ACTIVE NAVBAR SECTION
// =======================================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 180) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function(link) {
        link.style.color = "#cbd5e1";

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.style.color = "#60a5fa";
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// =======================================
// SMOOTH NAVIGATION
// =======================================

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =======================================
// CONSOLE MESSAGE
// =======================================

console.log(
    "Welcome to Sudha Akhil Eswar Reddy's Portfolio."
);
