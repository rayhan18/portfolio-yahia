import React, { Component, Fragment } from 'react'
import bg from '../Images/Group.png'
import yahia from '../Images/banner.jpg'
import { Container, Row } from 'react-bootstrap'

export default class MyExperience extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className=' myecprience-img mt-5'>
                  
                    <h2 className="myecprience-heading mt-5">My Service</h2>
                    
                    <p className="text-info text-center mt-4 d-3">OVER THIRTEN YEARS OF SPECIALISED
                            KNOWLEDGE & EXPERIENCE.</p>
                   
                
                </Container>
               <Container>
               {/* https://www.taxpro.co.za/services */}
               </Container>
                <h6>If you owe money to SARS in the form of unpaid taxes, the consequences could be very serious. 
                             At TDM, we understand the urgency and sensitivity of these matters,
                             and will help you to settle your tax debt and avoid potential criminal prosecution.
                                At TDM, we pride ourselves in our 100% success rate in negotiating settlements and compromises
                                between SARS and those who owe tax debts.  Our professional, experienced team,
                                under the leadership of a Master Tax Practitioner, has successfully resolved over one billion
                                Rand in tax debt and saved  clients hundreds of millions of Rand. 
                                Contact us to find out how we can help you.</h6>
            </Fragment>
        )
    }
}
