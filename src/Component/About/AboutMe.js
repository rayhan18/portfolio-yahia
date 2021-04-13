import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} className="about-img">
                    <div>
                        <h4 className='text-center text-white'>About Me</h4>
                    </div>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className="about-col">
                          <li>the ability to finalize the audit procedures as the audit approach with high quality and speed.</li>
                        <li>the ability to work accourding to international financial reporting of SMEs and full set</li>
                        <li>dealing eith the auditors according to my experience ad senior auditor (was under audit by Pwc, deloitte as a bookkeeper for many companies in the bookkeeping department</li>
                        <li>the ability to prepare the financial statementd,consolidated financial statements</li>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
