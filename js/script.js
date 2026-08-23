/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu__close");

const mobileMenuLinks = document.querySelectorAll(
    ".mobile-menu__nav a, .mobile-menu__button"
);


function openMenu() {
    mobileMenu.classList.add("active");

    document.body.classList.add("menu-open");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );
}


function closeMenu() {
    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );
}


menuButton.addEventListener(
    "click",
    openMenu
);


mobileMenuClose.addEventListener(
    "click",
    closeMenu
);


mobileMenuLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMenu
    );

});


/* =========================
   CLOSE MENU WITH ESC
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("active")
        ) {
            closeMenu();
        }

    }
);


/* =========================
   FAQ
========================= */

const faqItems = document.querySelectorAll(
    ".faq__item"
);


faqItems.forEach((item) => {

    const question = item.querySelector(
        ".faq__question"
    );


    question.addEventListener(
        "click",
        () => {

            const isActive =
                item.classList.contains("active");


            faqItems.forEach((otherItem) => {

                otherItem.classList.remove(
                    "active"
                );

            });


            if (!isActive) {

                item.classList.add(
                    "active"
                );

            }

        }
    );

});


/* =========================
   HEADER ON SCROLL
========================= */

const header = document.querySelector(
    ".header"
);


let lastScroll = 0;


window.addEventListener(
    "scroll",
    () => {

        const currentScroll =
            window.scrollY;


        if (currentScroll > 50) {

            header.classList.add(
                "header--scrolled"
            );

        } else {

            header.classList.remove(
                "header--scrolled"
            );

        }


        lastScroll = currentScroll;

    }
);


/* =========================
   REVEAL ANIMATIONS
========================= */

const animatedElements =
    document.querySelectorAll(
        ".request-card, .review, .process__item, .fact"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach((element) => {

    element.classList.add(
        "reveal"
    );

    observer.observe(
        element
    );

});


/* =========================
   SMOOTH ANCHOR SCROLL
========================= */

const anchors =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchors.forEach((anchor) => {

    anchor.addEventListener(
        "click",
        (event) => {

            const targetId =
                anchor.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            const headerHeight =
                document.querySelector(
                    ".header"
                ).offsetHeight;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }
    );

});


/* =========================
   CURRENT YEAR
========================= */

const year =
    new Date().getFullYear();


const copyright =
    document.querySelector(
        ".footer__copyright"
    );


if (copyright) {

    copyright.textContent =
        `© ${year} Андрей. Все права защищены.`;

}


/* =========================
   REDUCED MOTION
========================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    document.documentElement.style
        .scrollBehavior = "auto";

}