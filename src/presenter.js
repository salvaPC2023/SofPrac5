import { esBisiesto } from "./anioBisiesto.js"; // Asegúrate de que la ruta esté correcta

const anio_input = document.querySelector("#inputYear");
const form = document.querySelector("#bisiesto-form");
const resultadoDiv = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const anio = anio_input.value;
    const esBisiestoResult = esBisiesto(parseInt(anio));

    if (esBisiestoResult) {
        resultadoDiv.textContent = `El año ${anio} es bisiesto.`;
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = `El año ${anio} no es bisiesto.`;
        resultadoDiv.style.color = "red";
    }
});
