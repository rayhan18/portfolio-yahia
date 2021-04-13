import React, { Component, Fragment } from 'react'
import bg from '../Images/Group.png'
import yahia from '../Images/banner.jpg'
import { Container, Row,Col,Card,Button  } from 'react-bootstrap'

export default class MyExperience extends Component {
    render() {
        const colStyle={
            marginTop: '-70px'
        }
        return (
            <Fragment>
                <Container fluid={true} className=' myecprience-img mt-5'>
                  
                    <h2 className="myecprience-heading mt-5">My Service</h2>
                    
                    <p className="text-info text-center mt-4 d-3">OVER THIRTEN YEARS OF SPECIALISED
                            KNOWLEDGE & EXPERIENCE.</p>
                   
                
                </Container>
               <Container>
               {/* https://www.taxpro.co.za/services */}

               <Row>
                   <Col style={colStyle} xs={12} sm={12} md={6} lg={3}>
                   <Card style={{ width: '16rem' ,height: '430px'}} className="service-card">
                        <Card.Body>
                            <Card.Title className="text-center">NEGOTIATION</Card.Title>
                          
                            <Card.Text>
                            We speak to SARS on your behalf and navigate the complexities of dealing with outstanding debt. Using experience,
                             expertise and professionalism, we deal directly with SARS, leaving you free to go about your business.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col style={colStyle} xs={12} sm={12} md={6} lg={3}>
                   <Card style={{ width: '16rem' ,height: '430px'}} className="service-card">
                        <Card.Body>
                            <Card.Title className="text-center">SETTLEMENT</Card.Title>
                          
                            <Card.Text>
                            Through expert negotiation and an understanding of SARS systems, we negotiate with the Receiver to reach the best possible outcome for your tax debt.

​
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col style={colStyle} xs={12} sm={12} md={6} lg={3}>
                   <Card style={{ width: '16rem',height: '430px' }} className="service-card">
                        <Card.Body>
                            <Card.Title className="text-center">COMPROMISE</Card.Title>
                          
                            <Card.Text>
                            After assessing your situation, we approach SARS with a compromise proposal. If accepted, this will reduce the outstanding 
                            amount owed to SARS by you, effectively saving you money while still allowing you to reach tax compliance.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                   </Col>
                   <Col style={colStyle} xs={12} sm={12} md={6} lg={3}>
                   <Card style={{ width: '16rem',height: '430px' }} className="service-card">
                        <Card.Body>
                            <Card.Title className="text-center">DEFERRAL</Card.Title>
                          
                            <Card.Text>
                            We analyse your cash flow and requirements to establish an acceptable repayment plan.
                             We present this application to SARS and negotiate the details on your behalf.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                   </Col>
               </Row>
               </Container>
              
            </Fragment>
        )
    }
}
