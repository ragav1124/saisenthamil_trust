const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
}

// Reveal sections already visible when the page loads
revealSections();

// Reveal more while scrolling
window.addEventListener("scroll", revealSections);