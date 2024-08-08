import { Link } from "react-router-dom";
import "../styles/sobreus.css";

const Sobreus = () => {
  return (
    <>
      <div className="sobreus">
        <div className="testee">
          <h1>Pizzaria Damas</h1>
          <img className="logo" src="/logo-damas.svg" />
        </div>
        <div className="sobreus-texto">
          <div className="text">
            <h2 className="texto">Who we are?</h2>
            <p className="paragrafo">
            Damas pizza makes pizzas for customers, focused on delivering a
            Good to know for a good price.{" "}
            </p>
          </div>
          <div className="text">
            <h2 className="texto">What we do?</h2>
            <p className="paragrafo">
            We work with different types of flavors, available in
            establishments and also in delivery.
            </p>
          </div>
          <div className="text">
            <h2 className="texto">When do we start?</h2>
            <p className="paragrafo">
            We have been in the market since 2010, we started with just one
              establishment and a small group, nowadays we already have four
              establishments and more than one hundred employees working with us.
            </p>
          </div>
          <div className="text">
            <h2 className="texto">Where are we currently?</h2>
            <p className="paragrafo">
            We are located in some regions of Rio, but mainly
            in the North Zone, you can see all our establishments{" "}
              <Link to="/nossaslojas"> here</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobreus;
