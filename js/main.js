// window.addEventListener('load', () => {
//     document.querySelector('.loader').style.display = "none"
//     console.log('dom loaded')
// })

// Form controls

const formBtn = document.querySelector('.form-submit-button')
const nameInput = document.querySelector('.form-name-input')
const phoneInput = document.querySelector('.form-phone-input')
const formRejectAlert = document.querySelectorAll('.require-fields-alert')
const formSuccessAlert = document.querySelectorAll('.success-form-alert')

// Burger Items

const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu-body')
const headerLogo = document.querySelector('.header-logo')

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
        headerLogo.classList.toggle('activem')
        iconMenu.classList.toggle('activem')
        menuBody.classList.toggle('activem')
    })
}

// Form Handler 

const useAlerts = (confirmAlertStatus, rejectAlertStatus) => {
    formRejectAlert.forEach(e => {
        rejectAlertStatus ? e.style.display = "block" : e.style.display = "none"
    })
    formSuccessAlert.forEach(e => {
        confirmAlertStatus ? e.style.display = "block" : e.style.display = "none"
    })
}

let tg = {
    token: "5919867606:AAGF_0jom-_PXqQZITrhK_45DbeEwSxrkzs", // Your bot's token that got from @BotFather
    // chat_id: "1234567890" // The user's(that you want to send a message) telegram chat id
}

const userIds = ["261206896"]


function sendMessage(text, userId) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${userId}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (nameInput.value && phoneInput.value) {
        // fbq('track', 'Lead');
        // gtag('event', 'submit', { "event_category": 'form', "event_label": optionInput.value });
        for (singleUserId of userIds) {
            sendMessage(`
        Name : ${nameInput.value}
        Phone : ${phoneInput.value}`, singleUserId)
        }
        nameInput.value = ""
        phoneInput.value = ""
        useAlerts(true, false)
    } else {
        useAlerts(false, true)
    }
})

