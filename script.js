const btn = document.querySelector('.material-symbols-outlined')
const menu = document.querySelector('#float-menu')

btn.addEventListener('click', () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
})