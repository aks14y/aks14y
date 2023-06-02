import { Col, Container, Row, Text, styled } from "@nextui-org/react";
import AnimatedAboutMe from '../svgs/AnimatedAboutMe'

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Text>Hey there. I'm akshay</Text>
        </Col>
        <Col>
          <AnimatedAboutMe />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
