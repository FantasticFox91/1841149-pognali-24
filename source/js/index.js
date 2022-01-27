const topMenu = document.querySelector(".top-menu");
const burgerBtn = document.querySelector(".main-nav__toggle");
const alphabetBtns = document.querySelectorAll(".alphabet__button");
const dropdownBtn = document.querySelector(".country__button--dropdown");

topMenu.classList.add("top-menu--close")

burgerBtn.addEventListener("click", () => {
  topMenu.classList.toggle("top-menu--open");
  topMenu.classList.toggle("top-menu--close");
})

alphabetBtns.forEach(el => el.addEventListener("click", () => {
  document.querySelector(".alphabet__button--active").classList.remove("alphabet__button--active");
  el.classList.toggle("alphabet__button--active");
}))

document.querySelector(".country-filters__button").addEventListener("click", () => {
  if (document.querySelector(".country-filters").classList.contains("country-filters--close")) {
    document.querySelector(".country-filters").classList.remove("country-filters--close")
    document.querySelector(".country-filters").classList.add("country-filters--open")
  } else {
    document.querySelector(".country-filters").classList.remove("country-filters--open")
    document.querySelector(".country-filters").classList.add("country-filters--close")
  }
})

dropdownBtn.onclick = () => dropdownBtn.classList.toggle("country__button--active");
