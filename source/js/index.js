const topMenu = document.querySelector(".top-menu");
const burgerBtn = document.querySelector(".main-nav__toggle");
const alphabetBtns = document.querySelectorAll(".alphabet__button");
const dropdownBtn = document.querySelector(".country__button--dropdown");
const countryFiltersBtn = document.querySelector(".country-filters__button");
const modalBtn = document.querySelector(".add-profile__link");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__button");
let mapContainer = document.querySelector("#map");

let sticky = 20;

topMenu.classList.add("top-menu--close");

burgerBtn.addEventListener("click", () => {
  topMenu.classList.toggle("top-menu--open");
  topMenu.classList.toggle("top-menu--close");
});

alphabetBtns.forEach(el => el.addEventListener("click", () => {
  document.querySelector(".alphabet__button--active").classList.remove("alphabet__button--active");
  el.classList.toggle("alphabet__button--active");
}));


countryFiltersBtn !== null ? countryFiltersBtn.addEventListener("click", () => {
    if (document.querySelector(".country-filters").classList.contains("country-filters--close")) {
      document.querySelector(".country-filters").classList.remove("country-filters--close")
      document.querySelector(".country-filters").classList.add("country-filters--open")
    } else {
      document.querySelector(".country-filters").classList.remove("country-filters--open")
      document.querySelector(".country-filters").classList.add("country-filters--close")
    }
  })
  : null;

dropdownBtn !== null ? dropdownBtn.addEventListener("click", () => dropdownBtn.classList.toggle("country__button--active")) : null;

modalBtn !== null ? modalBtn.addEventListener("click", (event) => {
  event.preventDefault()
  modal.classList.toggle("modal--open")})
  : null;

modalCloseBtn !== null ? modalCloseBtn.onclick = () => modal.classList.toggle("modal--open") : null;

window.onscroll = () => {
  if(window.pageYOffset > sticky) {
    document.querySelector(".top-menu").classList.add("top-menu--scroll");
  } else {
    document.querySelector(".top-menu").classList.remove("top-menu--scroll");
  }
}

if (mapContainer != null) {
  document.querySelector(".map__img").remove();

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.93872031587833, lng: 30.32304628352043},
      mapID: "symmetric-ray-334813",
      zoom: 15.7,
    });

    const image = "data:image/svg+xml,%3Csvg width='18' height='22' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.364 15.5563L9 22L2.636 15.5563C1.37734 14.2819 0.520187 12.6581 0.172928 10.8905C-0.17433 9.12277 0.00390685 7.29051 0.685099 5.62539C1.36629 3.96027 2.51984 2.53707 3.99988 1.53576C5.47992 0.534448 7.21998 0 9 0C10.78 0 12.5201 0.534448 14.0001 1.53576C15.4802 2.53707 16.6337 3.96027 17.3149 5.62539C17.9961 7.29051 18.1743 9.12277 17.8271 10.8905C17.4798 12.6581 16.6227 14.2819 15.364 15.5563V15.5563ZM9 11.1377C9.53044 11.1377 10.0391 10.9243 10.4142 10.5445C10.7893 10.1648 11 9.64969 11 9.11262C11 8.57554 10.7893 8.06047 10.4142 7.6807C10.0391 7.30093 9.53044 7.08757 9 7.08757C8.46957 7.08757 7.96086 7.30093 7.58579 7.6807C7.21072 8.06047 7 8.57554 7 9.11262C7 9.64969 7.21072 10.1648 7.58579 10.5445C7.96086 10.9243 8.46957 11.1377 9 11.1377Z' fill='%23011C40'/%3E%3C/svg%3E%0A";
    const myMarker = new google.maps.Marker({
      position: { lat: 59.93872031587833, lng: 30.32304628352043},
      map,
      icon: image,
    });
  }
}

/*
Функция для проверки на перполнение контентом, взята с прошлого курса

function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i],
        nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          if (node.data.trim() !== '') {
            textNodes.push(node.data.trim() !== '' ? node : '');

          }
        }
      } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}
getTextNodesIn(document.body).forEach((item) => { item.textContent = "У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон." })
*/
