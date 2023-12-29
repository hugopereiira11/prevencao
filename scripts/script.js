const btn = document.querySelector('#botao-menu')
const menu = document.querySelector('#float-menu')
const btnMenu = document.querySelector('#btn-menu')
const btnClose = document.querySelector('#btn-close')

btn.addEventListener('click', () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
        btnClose.style.display = 'block'
        btnMenu.style.display = 'none'

    } else {
        menu.style.display = 'none'
        btnClose.style.display = 'none'
        btnMenu.style.display = 'block'
    }
})