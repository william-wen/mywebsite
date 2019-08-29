import React from 'react';
import './App.css';
import William from './media/William.jpg';
import Alarm from './media/ArduinoAlarm.png';
import Politics from './media/LogisticaPolitica.png';
import Resume from './media/WilliamWenFrontEnd.pdf';
import 'antd/dist/antd.css';
import { Icon, Card, Col, Row } from 'antd'; //ant-design
import { Link, animateScroll as scroll } from "react-scroll"; //react-scroll

const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <main>
        <header className = "navbar">
         <h2> William Wen </h2>
         <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-78}
            duration={500}
          >
            Projects
          </Link>
          <Link
             activeClass="active"
             to="about"
             spy={true}
             smooth={true}
             offset={-30}
             duration={500}
           >
            About
          </Link>
          <Link
             activeClass="active"
             to="home"
             spy={true}
             smooth={true}
             offset={-78}
             duration={500}
           >
            Home
          </Link>
        </header>

        <div className = "body">
          <section className = "home-page" id = "home">
            <div className = "middle-object">
              <img className="wphoto" src={William} alt = "William Photo"/>
              <h1> William Wen </h1>
              <hr className = "line"/>
              <div className = "icons">
                <a href="https://github.com/william-wen" target="_blank">
                  <Icon className = "icon" style={{fontSize: '50px'}} id="github-icon" type="github" />
                </a>
                <a href = "https://www.linkedin.com/in/william-wen360/" target="_blank">
                  <Icon className = "icon" style={{fontSize: '50px'}} id="linkedin-icon" type="linkedin" />
                </a>
                <a href = {"mailto:william.wen360@gmail.com"} target="_blank">
                  <Icon className = "icon" style={{fontSize: '50px'}} id="mail-icon" type="mail" />
                </a>
              </div>
            </div>
          </section>

          <section className = "about-page" id = "about">
            <div className = "left-half">
              <div className = "about-text">
                <h1 className = "about-me">
                  ABOUT ME
                </h1>
                <hr className = "line"/>
                <p className = "description">
                  {"Hey! My name is William and I'm an incoming sophomore Software Engineering student at UWaterloo. "}
                  {"I'm proficient in C/C++ and Front-End web development. I've gained experience programming "}
                  {"at my interships at "} <a className='link' href='https://www.hatch.com/' target="_blank">{`Hatch Ltd.`}</a> 
                  {"in Missassauga and "} <a className='link' href='http://www.hikedu.com/Default/Start' target="_blank">{`Hikedu Inc.`}</a> {"in Shanghai. Check out my "} <a className='link' href={Resume} target="_blank">{`resume!`}</a>
                </p>
                <p className = "description">
                  {"I have an interest in Machine Learning and am currently grinding out Stanford's ML Basics course. Look forward to "}
                  {" that spicy Linkedin certification soon. I also love to travel, meet new people, and hit the gym!"}
                </p>
              </div>
            </div>
          </section>

          <section className = "projects-page" id = "projects">
            <div className = "projects-container">
              <h1> Projects </h1>
              <div className = "projects">

                <div style={{ padding: '12px 30px 30px 30px' }}>
                  <Row gutter={16}>
                    <Col lg={8} xs={24} style={{marginTop: '18px'}}>
                      <a href="https://github.com/william-wen/CanvasTO" target="_blank">
                        <Card
                          className = "card-size"
                          hoverable={true}
                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                          <Meta title="CanvasTO" description="A game where players can manage a virtual Toronto. Written in Android Studio using XML, Java, and SQL." />
                        </Card>
                      </a>
                    </Col>
                    <Col lg={8} xs={24} style={{marginTop: '18px'}}>
                      <a href="https://devpost.com/software/annoying-arduino-alarm-clock" target="_blank">
                        <Card
                          className = "card-size"
                          hoverable={true}
                          cover={<img alt="example" src={Alarm} />}
                        >
                          <Meta title="Annoying Alarm Clock" description="An alarm clock that makes you do math in the morning. Built with C/C++ and an Arduino Uno." />
                        </Card>
                      </a>
                    </Col>
                    <Col lg={8} xs={24} style={{marginTop: '18px'}}>
                      <a href="https://devpost.com/software/logistica-politica" target="_blank">
                        <Card
                          className = "card-size"
                          hoverable={true}
                          cover={<img alt="example" src={Politics} />}
                        >
                          <Meta title="Logistica Politica" description="A webapp that predicts your mood and political leaning by analyzing your use of language in tweets." />
                        </Card>
                      </a>
                    </Col>
                  </Row>
                </div>

              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
