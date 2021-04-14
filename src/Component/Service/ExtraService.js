import React, { Component } from 'react'
import { Button, Container, Row,Col } from 'react-bootstrap'

export default class ExtraService extends Component {
    constructor(){
        super()
        this.state={
            exservice:['Income Tax Registrations','TAX CLEARANCE CERTIFICATE','VOLUNTARY DISCLOSURE ','Annual Financial Statements',
    'Management Statements',' Accounting Officer Reports',' Income Tax Returns (For KSA)','Provisional Tax Returns ','VAT Registrations','TAX DUE DILIGENCE'
    ]
        }
    }
    render() {
     const pStyle={
        background: '#05057b',
        marginTop: '27px',
        color:' wheat',
        marginLeft: '60px'
     }
        return (
            <div>
                <Container fluid={true} className="serviceBg">
                <Container className="fadeInUp  p-3 b mt-5">
                    <div className="mt-5 service-card">
                        
                <h6 style={{lineHeight: '29px'}}>If you owe money to SARS in the form of unpaid taxes, the consequences could be very serious. 
                             At TDM, we understand the urgency and sensitivity of these matters,
                             and will help you to settle your tax debt and avoid potential criminal prosecution.
                                At TDM, we pride ourselves in our 100% success rate in negotiating settlements and compromises
                                between SARS and those who owe tax debts.  Our professional, experienced team,
                                under the leadership of a Master Tax Practitioner, has successfully resolved over one billion
                                Rand in tax debt and saved  clients hundreds of millions of Rand. 
                                Contact us to find out how we can help you.</h6>
                    </div>
                <Row>
                    {
                     this.state.exservice.map(service=>{
                          return(
                            <Col xs={12} sm={12} md={3} lg={3} className="mb-1 key={key}">
                            <div className="mt-5 border p-1 text-center  "> 
                              <h4 className="text-uppercase text-white">{service} </h4>
                             </div>

                           </Col>
                          )
                      })  
                    }
                   <p style={pStyle} className="p-2 ">"QUALITY IN A SERVICE OR PRODUCT IS NOT WHAT YOU PUT INTO IT.
                    IT IS WHAT THE CUSTOMER GETS OUT OF IT."
                    - PETER DRUCKER  -
                    </p>
                </Row>
                </Container>
                </Container>
                
            </div>
        )
    }
}
