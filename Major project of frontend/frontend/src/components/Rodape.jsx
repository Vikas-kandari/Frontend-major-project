import styles from "./Rodape.module.css";

const Rodape = () => {
  return (
    <>
      <div className={styles.rodape}>
        <div>
          <h3 class="footer-titulo">Service</h3>
          <p>Opening hours: Monday to Friday, 8am to 5pm</p>
        </div>

        <div className={styles.logos}>
          <h3>Payment methods</h3>
          <img src="/mastercard.svg" alt="" />
          <img src="/visa.svg" alt="" />
          <img src="/pix.svg" alt="" />
        </div>

        <div>
          <h3>Our media</h3>
          <img src="/facebook.svg" alt="" />
          <img src="/whatssap.svg" alt="" />
          <img src="/instagram.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Rodape;
