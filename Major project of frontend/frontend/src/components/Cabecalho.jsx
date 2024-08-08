import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <>
      <nav className={styles.cabecalho}>
        <div>
          <Link to="/">
            <img className={styles.icone} src="/logo-damas.svg" alt="" />
          </Link>
        </div>

        <ul className={styles.menu}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/produtos">
            <li>Produt</li>
          </Link>
          <Link to="/faleconosco">
            <li>Contact us</li>
          </Link>
          <Link to="/sobreus">
            <li>About Us</li>
          </Link>
          <Link to="/nossaslojas">
            <li>Our stores</li>
          </Link>
        </ul>
        <div className={styles.loginContainer}>
          <div>
            <img className={styles.userLogo} src="/user.svg" alt="" />
          </div>
          <ul className={styles.login}>
            <Link to="/login">
              <li> Login</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Cabecalho;
