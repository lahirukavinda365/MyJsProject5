const navbarEl = document.querySelector(".navbar");

const bottomConEl = document.querySelector(".bottom-container");

console.log(bottomConEl.offsetTop);
console.log(navbarEl.offsetHeight);
window.addEventListener("scroll", () =>{
    if (window.scrollY > bottomConEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
})





