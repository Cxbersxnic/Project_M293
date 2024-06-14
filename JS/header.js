// header.js

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const main = document.querySelector("main");

    main.addEventListener("scroll", function() {
        if (main.scrollTop <= 0) {
            main.scrollTop = 1; // Prevent scrolling beyond the top
        }
    });
});
