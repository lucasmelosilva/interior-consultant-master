const button = document.querySelector('.menu-button');
const imageButton = [ './assets/img/svg/menu_white_24dp.svg', './assets/img/svg/close_white_24dp.svg']
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-list_item');

button.addEventListener('click', () => {
  menu.classList.toggle('open');
  button.attributes.src.value = imageButton[1];
  imageButton.reverse();
})

menu.addEventListener('click', (e) => {
  removeActive()
  addActive(e.target)
})

function removeActive() {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

function addActive(item) {
  item.classList.add('active');
}