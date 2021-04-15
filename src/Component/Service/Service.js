import React, { Component } from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'

export default class Service extends Component {
    render() {
        const serviceName=[
            'Tex & Vat','Zakat','Audit',' Internal Revenue Service','Interest Deduction Worksheet','Accounting'
        ]
        return (
            <div>
                <Container fluid={true} className="service-wrepar">
                     <Container>
                        <div className="service-div">
                            <h5 >Ask Your Question</h5>
                        </div>
                        <h3 className="text-center mt-5">I Have Got Answers</h3><hr/>
                        <Row>
                            {
                               serviceName.map(service=>{
                                   return(
                                    <Col xs={12} sm={6} md={4} lg={4}>
                            <Button variant="outline-primary service-btn "  >{service}</Button>                                                      
                            </Col>
                                   )
                               }) 
                            }
                            
                            
                        </Row>

                     </Container>
                </Container>
            </div>
        )
    }
}
