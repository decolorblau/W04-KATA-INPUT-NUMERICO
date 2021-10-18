//Renderizar boton
//Mostrar un texto recibido en el botón
//Ejecutar la accion recibida al clicarlo

const Button = ({ text, actionOnClick }) => {
  return <button onClick={actionOnClick}>{text}</button>;
};

export default Button;
