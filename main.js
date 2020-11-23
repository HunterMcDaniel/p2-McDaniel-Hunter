var dropdowns = document.getElementsByClassName('menudrop');
console.log(dropdowns);

var menuDrop = document.getElementsByClassName('has-submenu');
console.log(menuDrop);

function toggleDropdown() {

dropdowns[0].classList.toggle('show');
console.log(this);
this.children[0].classList.toggle('show');

}

for( i = 0; i < menuDrop.length; i ++){
    menuDrop[i].addEventListener("mouseenter", toggleDropdown)
    menuDrop[i].addEventListener("mouseleave", toggleDropdown)
}




//hamburger

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// pop up


const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}


for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// weather apiResult

var weatherContainer = document.querySelectorAll('#all h3 span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);

        // var cityName = document.createTextNode(apiResult.name.cityName);
        // textContainer[0].appendChild(cityName);

        weatherContainer[0].innerHTML = apiResult.name;
        weatherContainer[1].innerHTML = apiResult.weather[0].description;

console.log(apiResult.weather[0]);

console.log(apiResult);

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32601,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
