import Google from "../image/GoogleClone.png";
import "../stylos/proyectos.css";
function GoogleClone() {
  return (
    <div>
      <section className="proyect">
        <img src={Google} alt="imagen del proyecto"></img>
        <h3 className="proyect-title">Google Clone</h3>
        <div className="proyect-framework">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
        <p className="proyect-description">
          Es un clone del buscador mas usado del mundo, una copia de su diseño
          original.
        </p>
        <div className="proyect-button">
          <a href="https://gastoncabrera.github.io/googleclone/">Demo</a>
          <a href="https://github.com/gastoncabrera/googleclone">Code</a>
        </div>
      </section>
    </div>
  );
}

export default GoogleClone;
