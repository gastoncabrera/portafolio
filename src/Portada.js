import "./stylos/Desktop.css";
import "./stylos/Movile.css";
import "./stylos/Tablet.css";
import Foto from "./image/fotodeprueba.jpg";
import Rickandmorty from "./image/rickandmorty.png";
import Batatabit from "./image/Batatabit.png";
import Google from "./image/GoogleClone.png";

function Portada() {
  return (
    <div>
      <header id="inicio">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a title="Inicio" href="#inicio" className="menu__link">
                Inicio
              </a>
            </li>
            <li className="menu__item">
              <a href="#proyectos" title="Proyectos" className="menu__link">
                Proyectos
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container-hero">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__name">Gaston Cabrera</h1>
            <p className="hero__text">
              ¡Hola! Soy <span> Desarrollador Frontend </span> de Argentina.
            </p>
            <ul className="hero__list">
              <li className="hero__items">
                <a href="https://www.linkedin.com/in/gaston-cabrera-b39a17204/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4.5rem"
                    height="4.5rem"
                    fill="var(--color-second)"
                    className="linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
              <li className="hero__items">
                <a href="https://github.com/gastoncabrera">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4.5rem"
                    height="4.4rem"
                    fill="var(--color-second)"
                    className="github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="hero__image">
            <a href="#contacto" title="ir a la sección de contacto">
              Contáctame
            </a>
            <img src={Foto} alt="mi foto"></img>
          </div>
        </section>
      </div>
      <main id="proyectos">
        <h2>Proyectos</h2>
        <section className="proyect-container">
          <section className="proyect">
            <img src={Rickandmorty} alt="imagen del proyecto"></img>
            <h3 className="proyect-title">Rick and Morty API</h3>
            <div className="proyect-framework">
              <span>REACT</span>
            </div>
            <p className="proyect-description">
              Es una pagina el la cual esta toda la informacion de los
              personajes de rick and morty, obtenidas de una API.
            </p>
            <div className="proyect-button">
              <a href="https://gastoncabrera.github.io/rickandmorty/">Demo</a>
              <a href="https://github.com/gastoncabrera/rickandmorty">Code</a>
            </div>
          </section>
          <section className="proyect">
            <img src={Batatabit} alt="imagen del proyecto"></img>
            <h3 className="proyect-title">BatataBit</h3>
            <div className="proyect-framework">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </div>
            <p className="proyect-description">
              Es una pagina en la cual puedes conocer los precios de las
              distintas criptomonedas.
            </p>
            <div className="proyect-button">
              <a href="https://gastoncabrera.github.io/batatabit/">Demo</a>
              <a href="https://github.com/gastoncabrera/batatabit">Code</a>
            </div>
          </section>
          <section className="proyect">
            <img src={Google} alt="imagen del proyecto"></img>
            <h3 className="proyect-title">Google Clone</h3>
            <div className="proyect-framework">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </div>
            <p className="proyect-description">
              Es un clone del buscador mas usado del mundo, una copia de su
              diseño original.
            </p>
            <div className="proyect-button">
              <a href="https://gastoncabrera.github.io/googleclone/">Demo</a>
              <a href="https://github.com/gastoncabrera/googleclone">Code</a>
            </div>
          </section>
        </section>
      </main>
      <footer>
        <section id="contacto" className="contact-container">
          <h2>Contacto</h2>
          <p>¡Estoy disponible para unirme a tu equipo ahora mismo!</p>
          <div className="contact-info">
            <div className="gmail">
              <a href="mailto:cabreragastonivan31@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                cabreragastonivan31@gmail.com
              </a>
            </div>
            <a href="https://www.canva.com/design/DAEcCloZWlw/tAFCOVR_J4mHqA6ssd7DtQ/view?utm_content=DAEcCloZWlw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                className="cv"
                viewBox="0 0 16 16"
              >
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
              </svg>
              Curriculum Vitae
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Portada;
