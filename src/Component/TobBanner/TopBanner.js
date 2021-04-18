
import React, { Component } from 'react'
import '../../Component/MainCss/Style.css'
import {Container,Row,Col}from 'react-bootstrap'
import yahia from '../Images/eahyaimg.jpg'
import Typical from 'react-typical'
import '../MainCss/Responsive.css'
export default class TopBanner extends Component {
    render() {
        return (
            <div>
               <Container fluid={true} className="topbanner">
                 <Row>
                     <Col xs={12} sm={12} md={6} lg={8}>
                     <h2 className="topbanner-heading">I AM YEHYA SHABAN</h2>
                     <h3 className="topbanner-heading2">
                     
                     <Typical
                            steps={['ACCOUNTING AND AUDITING', 1000, 'VET AND TEX ', 500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                     </h3>
                     </Col>
                     <Col xs={12} sm={12} md={4} lg={4}>
                     <img className="topbanner-img" src={yahia} alt="yahia"/>
                     </Col>
                    
                 </Row>
                   
               </Container> 
            </div>
        )
    }
}
