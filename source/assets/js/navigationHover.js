(function() {

    const target = document.querySelector(".target");
const links = document.querySelectorAll(".navigation a");

function mouseenterFunc() {
    if (!this.parentNode.classList.contains("active")) {
        for (let i = 0; i < links.length; i++) {
            if (links[i].parentNode.classList.contains("active")) {
                links[i].parentNode.classList.remove("active");
            }
            links[i].style.opacity = "0.25";
        }

        this.parentNode.classList.add("active");
        this.style.opacity = "1";
    }
}
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
}

})();