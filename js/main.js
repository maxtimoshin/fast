// Burger Items

const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu-body')

// Scroll To Buttons

const mainBtn = document.querySelectorAll('.main-btn')
const portfolioBtn = document.querySelectorAll('.portfolio-btn')
const aboutUsBtn = document.querySelectorAll('.about-us-btn')
const contactsBtn = document.querySelectorAll('.contacts-btn')
const teamBtn = document.querySelectorAll('.team-btn')
const processBtn = document.querySelectorAll('.process-btn')
const orderBtn = document.querySelectorAll('.order-btn')

// Scroll To Area

const mainBlock = document.querySelector('.header')
const portfolioBlock = document.querySelector('.portfolio-container')
const aboutUsBlock = document.querySelector('.benefits-container')
const contactsBlock = document.querySelector('.footer')
const teamBlock = document.querySelector('.team-container')
const processBlock = document.querySelector('.stages-container')
const formBlock = document.querySelector('.form-container')

// Scroll To Handler

function scrollingToBlock(btn, block) {
    btn.forEach(e => {
        e.addEventListener('click', () => {
            block.scrollIntoView({ block: "start", behavior: "smooth" })
            document.body.classList.remove('lock')
            iconMenu.classList.remove('activem')
            menuBody.classList.remove('activem')
        })
    })
}

// ScrollTo listeners

scrollingToBlock(mainBtn, mainBlock)
scrollingToBlock(portfolioBtn, portfolioBlock)
scrollingToBlock(aboutUsBtn, aboutUsBlock)
scrollingToBlock(contactsBtn, contactsBlock)
scrollingToBlock(teamBtn, teamBlock)
scrollingToBlock(processBtn, processBlock)
scrollingToBlock(orderBtn, formBlock)


// Burger logic toggler 

if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('activem')
        menuBody.classList.toggle('activem')
    })
}