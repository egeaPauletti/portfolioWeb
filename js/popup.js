const button = document.querySelector('#btnCVNav')
const buttonAbout = document.querySelector('#btnCVAbout')
const popup = document.querySelector('.popupFundo')
const closeBtn = document.querySelector('.popupClose')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

buttonAbout.addEventListener('click', () => {
    popup.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'
})
