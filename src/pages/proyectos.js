import Rickandmorty from "../image/rickandmorty.png";
import "../stylos/proyectos.css";
function Proyectos() {
  return (
    <div>
      <section className="proyect">
        <img src={Rickandmorty} alt="imagen del proyecto"></img>
        <h3 className="proyect-title">Rick and Morty API</h3>
        <div className="proyect-framework">
          <span>REACT</span>
        </div>
        <p className="proyect-description">
          Es una pagina el la cual esta toda la informacion de los personajes de
          rick and morty, obtenidas de una API.
        </p>
        <div className="proyect-button">
          <a href="https://gastoncabrera.github.io/rickandmorty/">Demo</a>
          <a href="https://github.com/gastoncabrera/rickandmorty">Code</a>
        </div>
      </section>
    </div>
  );
}

export default Proyectos;
