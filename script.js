document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });

        /* CLOSE MENU AFTER CLICK */

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuToggle.innerHTML = "☰";

            });

        });

    }


    /* =========================
       PLAN BUTTON
    ========================= */

    const planButtons = document.querySelectorAll(".plan-btn");

    const budgetSelect = document.getElementById("budget");
    const serviceSelect = document.getElementById("service");
    const selectedPlanName =
        document.getElementById("selectedPlanName");

    const selectedPlanInput =
        document.getElementById("selectedPlanInput");


    planButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const plan =
                button.getAttribute("data-plan");

            /* SHOW SELECTED PLAN */

            if (selectedPlanName) {
                selectedPlanName.textContent = plan;
            }

            /* SEND PLAN TO FORMSPREE */

            if (selectedPlanInput) {
                selectedPlanInput.value = plan;
            }


            /* STARTER */

            if (plan.includes("Starter")) {

                if (budgetSelect) {
                    budgetSelect.value = "$15 - $30";
                }

                if (serviceSelect) {
                    serviceSelect.value = "Business Website";
                }

            }


            /* PROFESSIONAL */

            else if (plan.includes("Professional")) {

                if (budgetSelect) {
                    budgetSelect.value = "$30 - $60";
                }

                if (serviceSelect) {
                    serviceSelect.value = "Portfolio Website";
                }

            }


            /* BUSINESS */

            else if (plan.includes("Business")) {

                if (budgetSelect) {
                    budgetSelect.value = "$60 - $100";
                }

                if (serviceSelect) {
                    serviceSelect.value = "Custom Website";
                }

            }

        });

    });


    /* =========================
       CONTACT FORM
    ========================= */

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function () {

            const button =
                form.querySelector("button[type='submit']");

            if (button) {

                button.innerText = "Sending...";
                button.disabled = true;

            }

            /*
             IMPORTANT:
             Do NOT use event.preventDefault()
             here.

             Formspree needs the browser's
             normal form submission.
            */

        });

    }

});