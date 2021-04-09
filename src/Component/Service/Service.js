import React, { Component } from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'

export default class Service extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} className="service-wrepar">
                     <Container>
                        <div className="service-div">
                            <h5 >Ask Your Question</h5>
                        </div>
                        <h3 className="text-center mt-5">We Have Got Answers</h3>
                        <Row>
                            <Col>
                            <Button variant="outline-primary service-div "  >Primary</Button>
                            <Button variant="outline-primary service-div">Primary</Button>
                            <Button variant="outline-primary service-div">Primary</Button>
                            
                            </Col>
                        </Row>
                     </Container>
                </Container>
            </div>
        )
    }
}
