const navbar = document.querySelector('.navigation');
const container = document.querySelector('.container');
let prevScrollpos = container.scrollTop;

container.addEventListener('scroll', () => {
    let currentScrollPos = container.scrollTop;
    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove("hide");
    } else {
        navbar.classList.add("hide");
    }
    prevScrollpos = currentScrollPos;
});