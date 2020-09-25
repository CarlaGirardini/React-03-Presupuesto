import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
  // Definir los states
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Función que se ejecuta cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar
    if (nombre.trim() === "" || cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false); // Si pasa la validación, elimino el mensaje de error

    // Construir el objeto "gasto"
    const gasto = {
      id: shortid.generate(),
      nombre,
      cantidad
    }

    // Pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // Resetear el form
    guardarNombre('');
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agregá tus gastos acá</h2>

      {error ? <Error mensaje="Todos los campos son obligatorios o presupuesto incorrecto" /> : null}

      <div className="gasto">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej.: Comida"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="gasto">
        <label>Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej.: 500"
          value={cantidad}
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Cargar gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
