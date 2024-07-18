/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
// import flogo from "/flogo.svg";
import "../Style/footer.css"; // Import the CSS file
import { ArrowBtn } from "./magnetBtn";

const Footer = () => {
  const handleScrollToTop = window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="footer" id="footer">
      <Container>
        <Row className="rowMain">
          <Col xl={4} className="logoInfo">
            <h4>s'inscrire à notre lettre d'information</h4>
            <p className="footer-text">
              Découvrez nos dernières actualités en matière d'emballage
            </p>
            <form action="submit" className="newsletter">
              <input type="text" placeholder="Email Address" />
              <button className="footerBtn" type="submit">
                <ArrowBtn />
              </button>
            </form>
            {/* <Link className="footer-logo" to="#">
              <img src={flogo} alt="Logo" />
            </Link> */}
          </Col>
          <div className="linkItem">
            <Col xl="auto" lg={3} xs={6} className="footer-column">
              <div>
                <h6 className="footer-heading">SOCIÉTÉ</h6>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link to="/Who" reloadDocument className="footer-link">
                      A propos de nous
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/blog" reloadDocument className="footer-link">
                      Blogs
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Contact" reloadDocument className="footer-link">
                      Demande de devis
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Contact" reloadDocument className="footer-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl="auto" lg={3} xs={6} className="footer-column">
              <div>
                <h6 className="footer-heading">Produits</h6>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link to="/Tape" reloadDocument className="footer-link">
                      Adhésif
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Sfilm" reloadDocument className="footer-link">
                      Film Étirable
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Cardboard" reloadDocument className="footer-link">
                      Carton
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/feuillard" reloadDocument className="footer-link">
                      Feuillard
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl="auto" lg={3} xs={6} className="footer-column">
              <div>
                <h6 className="footer-heading">JURIDIQUE</h6>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link to="/Terms" reloadDocument className="footer-link">
                      Conditions générales
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Privacy" reloadDocument className="footer-link">
                      Politique de confidentialité
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </Row>
        <div className="toTop">
          <a href="#" onClick={handleScrollToTop}>
            <ArrowBtn />
          </a>
        </div>
        {/* <hr /> */}
        <Row className="lowerFoot">
          <p className="footer-bottom">
            © Maleo Emballage {new Date().getFullYear()}
          </p>
          <p>
            Site web développé par <Link to="/">MdX</Link>
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
