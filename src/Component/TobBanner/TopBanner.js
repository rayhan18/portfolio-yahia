
import React, { Component } from 'react'
import '../../Component/MainCss/Style.css'
import {Container,Row,Col}from 'react-bootstrap'
import yahia from '../Images/banner.jpg'
import Typical from 'react-typical'

export default class TopBanner extends Component {
    render() {
        return (
            <div>
               <Container fluid={true} className="topbanner">
                 <Row>
                     <Col className="topbanner-text">
                     <h2 className="topbanner-heading">I AM YAHIA</h2>
                    
                     <h3 className="topbanner-heading2">
                     
                     <Typical
                            steps={['ACCOUNTING AND AUDITING', 1000, 'VET AND TEX ', 500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                     </h3>
                     </Col>
                     <Col>
                      <img className="topbanner-img" src={yahia} alt="yahia"/>
                     </Col>
                 </Row>
                   
               </Container> 
            </div>
        )
    }
}
