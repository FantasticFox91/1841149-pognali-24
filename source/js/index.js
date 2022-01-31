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
    document.querySelector(".top-menu__container").classList.add("top-menu--scroll");
  } else {
    document.querySelector(".top-menu__container").classList.remove("top-menu--scroll");
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

    const image = "data:image/svg+xml,%3Csvg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20.5' cy='20.4998' r='19.7679' fill='white'/%3E%3Ccircle cx='20.5' cy='19.7676' r='8.78572' fill='%23182044'/%3E%3C/svg%3E%0A";
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
