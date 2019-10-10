import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid={true} className="about pt-4 pb-4 mt-4 mb-4 text-center">
            <Row>
                <Col>
                <h2 className="about-head">About Us</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} className="mx-auto about">
                <p>We are a stationary company dedicated to bringing the best stationary to our clients. We curate boxes full of tools to help you become your best self. We believe that the world needs more thoughtful and reflective individuals. Our mission remains to improve the lives and patterns of our customers.</p>
                </Col>
            </Row>
        </Container>
    );
}
export default About;