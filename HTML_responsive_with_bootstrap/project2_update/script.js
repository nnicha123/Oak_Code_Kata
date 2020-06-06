const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".topics");
hamburger.addEventListener("click",() => {
    navLinks.classList.toggle("topics-close");
})