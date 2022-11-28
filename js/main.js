const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu-body')

// Burger logic toggler 

if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('activem')
        menuBody.classList.toggle('activem')
    })
}