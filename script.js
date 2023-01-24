// document.querySelectorAll(".nav__item-link").forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.preventDefault();
//         const id = this.getAttribute("href");
//         document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     });
// });

const link = document.querySelectorAll(".nav__item-link");
const popular = document.querySelector(".popular");
const feedback = document.querySelector(".feedback");
const future = document.querySelector(".feature");
const blog = document.querySelector(".blog");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

document.querySelector(".nav__list").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__item-link")) {
        const id = e.target.getAttribute("href");
        const clicked = e.target;
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
        // remove class active
        link.forEach((l) => l.classList.remove("nav__item-link--active"));

        // add class active
        clicked.classList.add("nav__item-link--active");
    }
});

// scroll to active class
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) header.classList.add("fixed");
    else header.classList.remove("fixed");
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(hero);

// window.addEventListener("scroll", function () {
//     if (this.window.scrollY > popularCoors.top) header.classList.add("fixed");
//     else header.classList.remove("fixed");
// });

// slider feedback
const slides = document.querySelectorAll(".feedback__item");
const slider = document.querySelector(".feedback__list");
const maxSlide = slides.length;

let curSlide = 0;

const goToSlide = function (slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
};

goToSlide(0);

const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
};

setInterval(nextSlide, 3000);

// slider blog
