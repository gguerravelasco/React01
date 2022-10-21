//uso de default props
//Recordar el nombrado de los componenetes, siempre empiezan con letra mayuscula
//el uso del componente sería algo así:
//  <Button/>
//note la diferencia con el uso del un elemento en HTML, ese elemento comienza en minúscula
//  <button></button>
//a parte el editor, en este caso en VSC, los diferentes elementos o partes se marcan en ciertos colores

//Para asegurarnos que cuando pasamos parámetros (props), sean de un específico tipo, necesatimos hacer uso de
//prop-types, para ello usamos npm install --save prop-types

import PropTypes from "prop-types";

//comentamos para usar el Button.defaultProps, en la linea de abajo vemos como se pone el valor por default
//name='Usuario'
//export function Button({ text, name ='Usuario' }) {
export function Button({ text, name }) {
  console.log(text);
  if (!text) {
    console.log("Se requiere el parametro de texto");
  }
  return (
    <button
      onClick={function () {
        console.log("Hola mundo");
      }}
    >
      {text}-{name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//Otra forma de colocar por default un parametro
Button.defaultProps = {
  name: "Algún usario",
};
