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
                        <h3 className="text-center mt-5">I Have Got Answers</h3><hr/>
                        <Row>
                            <Col xs={12} sm={6} md={4} lg={4}>
                            <Button variant="outline-primary service-btn "  >Tex & Vat</Button>
                            
                            
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                            <Button variant="outline-primary service-btn "  >Zakat</Button>
                            
                            
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                            <Button variant="outline-primary service-btn "  >Audit</Button>
                            
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                            <Button variant="outline-primary service-btn "  > Internal Revenue Service</Button>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                            <Button variant="outline-primary service-btn "  > Interest Deduction Worksheet</Button>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                            <Button variant="outline-primary service-btn "  >Accounting</Button>
                            </Col>
                        </Row>

                     </Container>
                </Container>
            </div>
        )
    }
}
