import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import wikiSeach from "../assets/img/wikiSearch.png";
import awsImg from "../assets/img/awsImg.png";
import CodeSignal from "../assets/img/CodeSignal.png";
import newsApp from "../assets/img/newsApp.png";
import TouchStone from "../assets/img/TouchStone.png";
import research1 from "../assets/img/research1.png";
import portimg from "../assets/img/portimg.png";
import colorSharp2 from "../assets/img/color-sharp.png";
import javaCert from "../assets/img/javaCert.png";
import machineCert from "../assets/img/machineCert.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects_1 = [
    {
      title: "Portfolio Website",
      description: "(This Website)",
      imgUrl: portimg,
      url:"https://github.com/SnowQannik/UditanshuKhatri.git",
    },
    {
      title: "News App",
      description: "An app that lets users read news from different sources and creates a user profile with personalized news.",
      imgUrl: newsApp,
      url:"https://github.com/SnowQannik/News-App",
    },
    {
      title: "Quizz taking Website",
      description: "A website that lets users create and take quizzes.",
      imgUrl: TouchStone,
      url: "https://github.com/SnowQannik/TouchStone",
    },
    {
      title: "Search Engine",
      description: "Search Engine that works on the agorithms like PageRank and MapReduce using WikiDumps.",
      imgUrl: wikiSeach,
      url:"https://github.com/SnowQannik/WikiDump-Seach-Engine",
    },
  ];
  
  const projects_2 = [
    {
      title: "CodeSignal Score",
      description: "Data structure and Algorithm(LeetCode).",
      imgUrl: CodeSignal,
      url:"https://app.codesignal.com/coding-report/q9qxFcAY89oxhoSsH-Z7Koj7xo9mpruBDG9okaFb2t?accessToken=q9qxFcAY89oxhoSsH-xGgitzDnCQ39xMEwHtgbWD85",
    },

    {
      title: "AWS Developer Associate",
      description: "Certificate",
      imgUrl: awsImg,
      url:"https://www.credly.com/badges/0f32764a-6ebd-42f9-aea0-89acf6d95c37/public_url",
    },
    {
      title: "Machine Learning Master Course",
      description: "Certificate",
      imgUrl: machineCert,
      url:"https://online.codingblocks.com/app/certificates/CBOL-49635-79a1",
    },
    {
      title: "The complete Java Certification Course (Udemy)",
      description: "Certificate",
      imgUrl: javaCert,
      url:"https://www.udemy.com/certificate/UC-653d2948-a794-45b9-9cf5-35daf726d0a9/",
    },
  ];
  
  const projects_3 = [
    {
      title: "Face Recognition System",
      description: "Research on a Face recognition system using image processing with MATLAB.",
      imgUrl: research1,
      url:"https://github.com/SnowQannik/Research-Paper-Face-Recognition",
    },
    {
      title: "Lossless Image Compression",
      description: "Research on Lossless Image Compression Using MATLAB",
      imgUrl: research1,
      url:"https://github.com/SnowQannik/Reseach-Paper-Compression",
    },
  ];
   

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Achievements</h2>
                <p>Welcome to my Projects page, where you can find a collection of my works that showcase my skills and experience in software development. These projects were created both collaboratively in an agile team environment and individually. Explore each project to learn more about the technologies used.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Research</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects_1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            {
                              projects_2.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                            {
                              projects_3.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}