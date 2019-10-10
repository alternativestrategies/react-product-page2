import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';


const Footer = () => {
    // creates last modified variable
    let lastMod = document.lastModified;

    return(
        <footer className="footer text-center pb-4">
            <Container fluid={true}>
                <Row>
                    <Col xs={10} sm={8} md={6} lg={4} className="mx-auto">
                    <p className="footer-lead">
                        Sign up for our Newsletter
                    </p>
                    <p className='footer-sub'>
                        Don't miss out on the latest news from our team!
                    </p>
                    <InputGroup className="pb-4 pt-4">
                        <FormControl 
                        type="email"
                        placeholder="EMAIL " />
                        <InputGroup.Append >
                            <Button className="submit-btn" >
                                Sign Up
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                </Row>
                <hr/>
                <span>Copyright 2019, Alternative Strategies</span>
                <span>{`Last Modified: ${lastMod}`} </span>
            </Container>
        </footer>
    );
}

export default Footer;