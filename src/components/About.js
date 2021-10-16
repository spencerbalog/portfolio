import { render } from "@testing-library/react";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export default function About() {
    return(
        <Container fluid className="about-section">
            <Row style={{justifyContent: "center", padding: "10px"}}>
                <Col md={7} style={{justifyContent:"center", paddingTop: "30px", paddingBottom: "30px"}}>
                    <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                        Hi
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}