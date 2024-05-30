/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
// import logo from "/logodark.png";
import "../Style/footer.css"; // Import the CSS file
import { ArrowBtn } from "./magnetBtn";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row className="rowMain">
          <Col xl={4} className="logoInfo">
            {/* <Link className="footer-logo" to="#">
              <img src={logo} alt="Logo" />
            </Link> */}
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
          </Col>
          <div className="linkItem">
            <Col xl="auto" lg={3} xs={6} className="footer-column">
              <div>
                <h6 className="footer-heading">SOCIÉTÉ</h6>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link to="/Tape" className="footer-link">
                      Produits
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Who" className="footer-link">
                      A propos de nous
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="#" className="footer-link">
                      Blogs
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Contact" className="footer-link">
                      Demande de devis
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Contact" className="footer-link">
                      Contact
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
                    <Link to="/Terms" className="footer-link">
                      Conditions générales
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link to="/Privacy" className="footer-link">
                      Politique de confidentialité
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </Row>
        {/* <hr /> */}
        <Row className="lowerFoot">
          <p className="footer-bottom">
            © Maleo Emballage {new Date().getFullYear()}
          </p>
          <p>
            Site web développé par <a href="/">MdX</a>
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
