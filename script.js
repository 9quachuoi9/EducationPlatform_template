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
const popularCoors = popular.getBoundingClientRect();
const feedbackCoors = feedback.getBoundingClientRect();
const futureCoors = future.getBoundingClientRect();
const blogCoors = blog.getBoundingClientRect();

window.addEventListener("scroll", function () {
    if (this.window.scrollY > popularCoors.top) header.classList.add("fixed");
    else header.classList.remove("fixed");
});
