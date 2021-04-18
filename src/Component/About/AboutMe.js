import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} className="about-img fadeInUp">
                    <div className="">
                       
                    </div>
                    <Row>
                  
                        <Col xs={12} sm={12} md={6} lg={6} className="about-col">
                        <h2 className=' text-white '>About Me</h2><hr/>
                          <li className="text-capitalize">the ability to finalize the audit procedures as the audit approach with high quality and speed.</li>
                        <li className="text-capitalize">the ability to work accourding to international financial reporting of SMEs and full set</li>
                        <li className="text-capitalize">dealing eith the auditors according to my experience ad senior auditor (was under audit by Pwc, deloitte as a bookkeeper for many companies in the bookkeeping department</li>
                        <li className="text-capitalize">the ability to prepare the financial statementd,consolidated financial statements</li>
                        </Col>
                       
                        <Col xs={12} sm={12} md={6} lg={6} className="about-col">
                        <h2 className=' text-white '>Achivment</h2><hr/>
                          <li className="text-capitalize">DipIFR Diploma in international financial reporting standards from ACCA</li>
                        <li className="text-capitalize">Certla certificate in international auditing from ACCA .</li>
                        <li className="text-capitalize">ACCA certifications are allowed</li><hr/>
                        <h3> Curent psotion</h3>

                        <li>SENIOR AUDITOR AND BOOKKEEPER, IBRAHIM IKHTABY APA, MEMBER OF INTEGRA INTERNATIONAL</li>
                        </Col>
                       
                    </Row>
                    
                </Container>
            </div>
        )
    }
}
