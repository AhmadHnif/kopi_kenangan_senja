// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// when hamburger menu clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// close hamburger menu when click anywhere but navbar and humburger menu
const humburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
