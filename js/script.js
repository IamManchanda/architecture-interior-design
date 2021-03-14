const hamburgerMenu = document.querySelector(".hamburger-menu");
const discoverNowButton = document.querySelector(".discover-now-button");
const scrollBtn = document.querySelector(".scroll-btn");

const menuItems = document.querySelectorAll(".menu-link");
const menus = Array.from(menuItems);

window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 700);
};

function handleHamburgerMenu() {
  document.querySelector(".container").classList.toggle("change");
}

function handleScroll() {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 700);
}

hamburgerMenu.addEventListener("click", handleHamburgerMenu);
discoverNowButton.addEventListener("click", handleScroll);
scrollBtn.addEventListener("click", handleScroll);
menus.forEach((menu) => {
  menu.addEventListener("click", handleScroll);
});
