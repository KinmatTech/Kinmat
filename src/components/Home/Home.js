import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/passport.jpg";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Ani <span className='setpink'>Mathew</span></strong>
              </h1>

              <p className="heading-description blockquote">
                A Fullstack Developer with over 6 years experience in Web Development. 
                I am passionate about Creating Clean, Beautiful, Responsive 
                and User Friendly Interfaces. <br/>             
              </p>

              <div className="heading-type">
                <br/>
                <hr/>
                <TypeWriter />
                <hr/>
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>      
    </section>
  );
}

export default Home;
