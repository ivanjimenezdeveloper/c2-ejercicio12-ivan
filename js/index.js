const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

console.log(numeroAleatorio);
const buttonAdivinaElemento = document.querySelector(".adivinar");

const actualizarMensaje = (mensajeElemento, mensaje, clase) => {
  mensajeElemento.textContent = mensaje;
  mensajeElemento.classList.remove("acierto");
  mensajeElemento.classList.remove("error");
  mensajeElemento.classList.add(clase);
};

const desactivaBotones = (inputAdivinaElemento, buttonAdivinaElemento) => {
  inputAdivinaElemento.disabled = true;
  buttonAdivinaElemento.disabled = true;
};

const adivinaNumero = () => {
  const inputAdivinaElemento = document.querySelector(".numero");
  const mensajeElemento = document.querySelector(".mensaje");

  const resultado = inputAdivinaElemento.valueAsNumber === numeroAleatorio;

  let mensaje = "";
  let clase = "";

  if (!resultado) {
    mensaje =
      inputAdivinaElemento.valueAsNumber > numeroAleatorio
        ? "El numero secreto es menor"
        : "El numero secreto es mayor";

    clase = "error";
  } else {
    mensaje = "Acertaste makina!";
    clase = "acierto";
    desactivaBotones(inputAdivinaElemento, buttonAdivinaElemento);
  }

  actualizarMensaje(mensajeElemento, mensaje, clase);
};

buttonAdivinaElemento.addEventListener("click", adivinaNumero);
