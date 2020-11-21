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
