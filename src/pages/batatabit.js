import Batatabitimg from "../image/Batatabit.png";
import "../stylos/proyectos.css";

function Batatabit() {
  return (
    <div>
      <section className="proyect">
        <img src={Batatabitimg} alt="imagen del proyecto"></img>
        <h3 className="proyect-title">BatataBit</h3>
        <div className="proyect-framework">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
        <p className="proyect-description">
          Es una pagina en la cual puedes conocer los precios de las distintas
          criptomonedas.
        </p>
        <div className="proyect-button">
          <a href="https://gastoncabrera.github.io/batatabit/">Demo</a>
          <a href="https://github.com/gastoncabrera/batatabit">Code</a>
        </div>
      </section>
    </div>
  );
}

export default Batatabit;
