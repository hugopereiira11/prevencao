const btn = document.querySelector('#botao-menu')
const menu = document.querySelector('#float-menu')
const btnMenu = document.querySelector('#btn-menu')
const btnClose = document.querySelector('#btn-close')
const btnHome = document.querySelector('#btn-home')

btn.addEventListener('click', () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
        btnClose.style.display = 'block'
        btnMenu.style.display = 'none'
        btnHome.style.display = 'block'

    } else {
        menu.style.display = 'none'
        btnClose.style.display = 'none'
        btnMenu.style.display = 'block'
        btnHome.style.display = 'none'
    }
})