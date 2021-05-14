import GastosImg from "../image/gastos.png";
import "../stylos/proyectos.css";

function Gastos() {
  return (
    <div>
      <section className="proyect">
        <img src={GastosImg} alt="imagen del proyecto"></img>
        <h3 className="proyect-title">Aplicación de Gastos</h3>
        <div className="proyect-framework--many">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>BOOTSTRAP</span>
        </div>
        <p className="proyect-description">
          Es una aplicacion de gastos la cual toda la informacion se sube en el
          local Storage.
        </p>
        <div className="proyect-button">
          <a href="https://gastoncabrera.github.io/aplicaciondegastos/">Demo</a>
          <a href="https://github.com/gastoncabrera/aplicaciondegastos">Code</a>
        </div>
      </section>
    </div>
  );
}

export default Gastos;
