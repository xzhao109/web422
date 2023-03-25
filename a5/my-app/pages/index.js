/*********************************************************************************
 *  WEB422 – Assignment 5
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Xiaoyue Zhao          Student ID: 124899212      Date: Mar 24
 *
 ********************************************************************************/

import { Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row>
        <Col style={{ marginTop: "25px", marginBottom: "25px" }}>
          <Image
            fluid
            rounded
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art of New York City, colloquially "the
            Met", is the largest art museum in the Americas. Its permanent
            collection contains over two million works, divided among 17
            curatorial departments. The main building at 1000 Fifth Avenue,
            along the Museum Mile on the eastern edge of Central Park on
            Manhattan's Upper East Side, is by area one of the world's largest
            art museums. A much smaller second location, The Cloisters at Fort
            Tryon Park in Upper Manhattan, contains an extensive collection of
            art, architecture, and artifacts from medieval Europe.
          </p>
          <p>
            The Metropolitan Museum of Art was founded in 1870 with its mission
            to bring art and art education to the American people. The museum's
            permanent collection consists of works of art from classical
            antiquity and ancient Egypt, paintings, and sculptures from nearly
            all the European masters, and an extensive collection of American
            and modern art. The Met maintains extensive holdings of African,
            Asian, Oceanian, Byzantine, and Islamic art. The museum is home to
            encyclopedic collections of musical instruments, costumes, and
            accessories, as well as antique weapons and armor from around the
            world. Several notable interiors, ranging from 1st-century Rome
            through modern American design, are installed in its galleries.
          </p>
        </Col>
        <Col md={6}>
          <p>
            In early 2020, COVID-19 pandemic was greatly impacted the Met's
            operations and led to the museum's first long-term shutdown on March
            13. The Met gradually partially reopened in stages. By 2021, the
            public could visit the Met five days a week, with reduced hours of
            operation, and visitors were required to wear masks and practice
            social distancing. Several special exhibits were opened to the
            public during the reduced hours. There were 6,479,548 visitors in
            2019, compared to 1,124,759 in 2020. In 2021, despite the COVID-19
            pandemic in New York City, the museum attracted 1,958,000 visitors,
            ranking fourth on the list of most-visited art museums in the world.
          </p>
          <p>
            Other services such as the research libraries were almost completely
            closed except for off-site digital access. As a result, 20 percent
            of staff positions were eliminated, and Met director Max Hollein
            indicated that the Met might deaccession and sell off some of its
            collection to make up financial shortfalls. At least some of the
            museum's large art holding was placed in storage in order to make-up
            for losses in revenue causes by responses to the pandemic.
          </p>
          <p>
            <a
              style={{ color: "#198754" }}
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              target="_blank"
              rel="noreferrer"
            >
              https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art
            </a>
          </p>
        </Col>
      </Row>
    </>
  );
}
