const lista = document.querySelector('#menu__responsive')
const header = document.querySelector('#header__menu__responsive')
const btnMenu = document.querySelector('#btn__menu')
const btnClose = document.querySelector('#btn__close')
const body = document.querySelector('#body')

lista.addEventListener('click', (e) => {
  if (e.target && e.target.tagName === 'A') {
    header.classList.remove('top')
    btnClose.style.display = "none"
    btnMenu.style.display = "block"
    body.classList.remove('nonScroll')
  }
})

btnMenu.addEventListener('click', () => {
  header.classList.remove('top')
  header.classList.add('down')
  body.classList.add('nonScroll')
  btnMenu.style.display = "none"
  btnClose.style.display = "block"
})

btnClose.addEventListener('click', () => {
  header.classList.remove('down')
  header.classList.add('top')
  body.classList.remove('nonScroll')
  btnMenu.style.display = "block"
  btnClose.style.display = "none"
})

/*Campos a evaluar
  Nombre
  Apellido
  Correo
  Teléfono
*/
const main = document.querySelector('.main')
const nombre = document.querySelector('#Nombre')
const apellido = document.querySelector('#Apellido')
const email = document.querySelector('#Email')
const phone = document.querySelector('#phone')
const enviarData = document.querySelector('#btn__enviarData')
const textName = document.querySelector('#textName')
const textApellido = document.querySelector('#textApellido')
const textEmail = document.querySelector('#textEmail')
const textPhone = document.querySelector('#textPhone')

const validarCampos = () => {
  let validate = true;
  const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const patron = new RegExp(regExpEmail);
  if ((nombre.value.trim() === "" || nombre.value.trim().length < 3)) {
    textName.style.display = "block";
    nombre.style.border = "1px solid red";
    return false;
  } else {
    textName.style.display = "none";
    nombre.style.border = "1px solid green"
  }

  if (apellido.value.trim() === "") {
    textApellido.style.display = "block";
    apellido.style.border = "1px solid red";
    return false;
  } else {
    textApellido.style.display = "none";
    apellido.style.border = "1px solid green"
  }

  if (!patron.test(email.value)) {
    textEmail.style.display = "block";
    email.style.border = "1px solid red"
    return false;
  } else {
    textEmail.style.display = "none";
    email.style.border = "1px solid green"
  }

  if (phone.value.trim().length === 0 || phone.value.trim().length < 6) {
    textPhone.style.display = "block";
    phone.style.border = "1px solid red"
    return false;
  } else {
    textPhone.style.display = "none";
    phone.style.border = "1px solid green"
  }


  if (validate) {
    enviarData.disabled = false;
    document.querySelector('#form').addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target))
      construirEmail(data)

      const enviarEmail = document.querySelector('#emailSubmit');
      enviarEmail.setAttribute('href', `mailto:${data.CorreoElectronico}?name=${data.Nombre}&subject='Consulta de Precios' &body='Area de interes:${data.AreaDeInteres} Pais:${data.Pais} Telefono: ${data.Telefono}'`);
      enviarEmail.click();
      nombre.focus();
    })
  }
}

enviarData.addEventListener("click", validarCampos)
nombre.addEventListener("keyup", validarCampos)
apellido.addEventListener("keyup", validarCampos)
email.addEventListener("keyup", validarCampos)
phone.addEventListener("keyup", validarCampos)

const construirEmail = (data) => {
  console.log(data);
  const template = document.createElement('DIV');
  template.setAttribute('class', 'successMessage');
  template.innerHTML = '';

  template.innerHTML =
    `
      <div class="successMessage__content">
        <h2 class="successMessage__content__title">
          ¡Datos de tu consulta!
        </h2>
      </div>
      <div class="successMessage__content">
        <div class="successMessage__content__icon">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <div>
          <p class="successMessage__content__paragraph">
            <strong class="successMessage__content__strong">${data.Nombre}</strong> gracias por tu consulta!
            En breve recibirás un email en tu casilla <strong class="successMessage__content__strong">${data.CorreoElectronico}</strong>
            con más detalles sobre el curso de tu elección.
            <span class="successMessage__content__span">¡¡Gracias por elegirnos!!</span>
          </p>
        </div>
      </div>
    `
  main.appendChild(template)
}

addEventListener("resize", () => {
  let ancho = screen.width;
  if (ancho >= 992 && body.classList.contains('nonScroll')) {
    body.classList.remove("nonScroll")
    header.classList.remove('down')
    header.classList.add('top')
    btnMenu.style.display = "block"
    btnClose.style.display = "none"
  }
})
