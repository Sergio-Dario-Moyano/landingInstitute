const lista = document.querySelector('#menu__responsive')
const header = document.querySelector('#header__menu__responsive')
const btnMenu = document.querySelector('#btn__menu')
const btnClose = document.querySelector('#btn__close')
const body = document.querySelector('#body')

lista.addEventListener('click', (e) => {
  if(e.target && e.target.tagName === 'A') {
    header.classList.remove('top')
    btnClose.style.display = "none"
    btnMenu.style.display = "block"
    body.classList.remove('nonScroll')
  }
})

btnMenu.addEventListener('click', () => {
  header.classList.remove('down')
  header.classList.add('top')
  body.classList.add('nonScroll')
  btnMenu.style.display = "none"
  btnClose.style.display = "block"
})

btnClose.addEventListener('click', () => {
  header.classList.remove('top')
  header.classList.add('down')
  body.classList.remove('nonScroll')
  btnMenu.style.display = "block"
  btnClose.style.display = "none"
})

