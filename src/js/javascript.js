document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const banner = document.getElementById("home");

    const bannerHeight = banner.offsetHeight;

    window.addEventListener("scroll", () => {
        if (window.scrollY > bannerHeight) {
            header.classList.remove("fixed");
            header.classList.add("relative-header");
        } else {
            header.classList.remove("relative-header");
            header.classList.add("fixed");
        }
    });
});

