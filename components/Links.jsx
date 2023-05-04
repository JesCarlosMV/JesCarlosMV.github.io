/* eslint-disable react/prop-types */
// links para los distintos enlaces de la pagina ( Github, FB,Instagram, etc)
import '../src/assets/links.css';

const Links = () => {
  return (
    <section className="containerIcons">
      <div className="containerIcons__containerh3Icon">
        <h3>G1tHub</h3>
        <a href="https://github.com/JesCarlosMV" target="blank">
          <ion-icon size="large" name="logo-github"></ion-icon>
        </a>
      </div>
      <div className="containerIcons__containerh3Icon">
        <h3>Link3d1n</h3>
        <a
          href="https://www.linkedin.com/in/jesus-carlos-martin-villalon/"
          target="blank"
        >
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
        </a>
      </div>
      <div className="containerIcons__containerh3Icon">
        <h3 className="h3-IG">Instagr4m</h3>
        <a href="https://www.instagram.com/jcmvblogs/" target="blank">
          <ion-icon size="large" name="logo-instagram"></ion-icon>
        </a>
      </div>
      <div className="containerIcons__containerh3Icon">
        <h3>You7ube</h3>
        <a href="https://www.youtube.com/@JCMVBlogs" target="blank">
          <ion-icon size="large" name="logo-youtube"></ion-icon>
        </a>
      </div>
      <div className="containerIcons__containerh3Icon">
        <h3>t1kt0k</h3>
        <a href="https://www.tiktok.com/@jcmvbiker" target="blank">
          <ion-icon size="large" name="logo-tiktok"></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default Links;
