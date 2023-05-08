import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import wikiSeach from "../assets/img/wikiSearch.png";
import awsImg from "../assets/img/awsImg.png";
import CodeSignal from "../assets/img/CodeSignal.png";
import newsApp from "../assets/img/newsApp.png";
import TouchStone from "../assets/img/TouchStone.png";
import research1 from "../assets/img/research1.png";
import portimg from "../assets/img/portimg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
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
    {
      title: "CodeSignal Score",
      description: "Data structure and Algorithm(LeetCode).",
      imgUrl: CodeSignal,
      url:"https://app.codesignal.com/coding-report/q9qxFcAY89oxhoSsH-Z7Koj7xo9mpruBDG9okaFb2t?accessToken=q9qxFcAY89oxhoSsH-xGgitzDnCQ39xMEwHtgbWD85",
    },
    {
      title: "News App",
      description: "An app that lets users read news from different sources and creates a user profile with personalized news.",
      imgUrl: newsApp,
      url:"https://github.com/SnowQannik/News-App",
    },
    {
      title: "AWS Developer Associate",
      description: "Certificate",
      imgUrl: awsImg,
      url:"https://www.credly.com/badges/0f32764a-6ebd-42f9-aea0-89acf6d95c37/public_url",
    },
    {
      title: "Research Paper 1",
      description: "Research on a Face recognition system using image processing with MATLAB.",
      imgUrl: research1,
      url:"https://github.com/SnowQannik/Research-Paper-Face-Recognition",
    },
    {
      title: "Research Paper 2",
      description: "Research on Lossless Image Compression Using MATLAB",
      imgUrl: research1,
      url:"https://github.com/SnowQannik/Reseach-Paper-Compression",
    },
    {
      title: "Portfolio Website",
      description: "(This Website)",
      imgUrl: portimg,
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
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>More Coming soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More Coming soon!</p>
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
