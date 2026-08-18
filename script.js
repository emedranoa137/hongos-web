/* =========================================
   FAQ
========================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach((item) => {

    const question =
        item.querySelector(".faq-question");


    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        faqItems.forEach((otherItem) => {

            otherItem.classList.remove("active");

            const answer =
                otherItem.querySelector(".faq-answer");

            answer.style.maxHeight = null;

        });


        if (!isActive) {

            item.classList.add("active");

            const answer =
                item.querySelector(".faq-answer");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});



/* =========================================
   MENÚ MÓVIL
========================================= */

const mobileButton =
    document.querySelector(".mobile-menu");

const navLinks =
    document.querySelector(".nav-links");


mobileButton.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.position = "absolute";

        navLinks.style.top = "76px";

        navLinks.style.left = "0";

        navLinks.style.right = "0";

        navLinks.style.padding = "20px";

        navLinks.style.background =
            "#f7f4ec";

        navLinks.style.flexDirection =
            "column";

        navLinks.style.alignItems =
            "stretch";

    }

});



/* =========================================
   CTA TRACKING
========================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log(
            "CTA:",
            button.textContent.trim()
        );

    });

});