
import React, { Component } from 'react'
import { Container, Row ,Col,Button} from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-img">
              
                <Container>
                    <Row>
                        <Col>
                        <div style={{marginTop:'50px'}}>
                            <h3>Looking Me</h3><hr/>
                           <Button>facebook</Button>
                           <Button className="ml-1 mr-1">twiter</Button>
                           <Button>Linkedin</Button>
                        </div>
                           
                        </Col>

                        <Col>
                        <div className="footer-div">
                        <h3 style={{color: '#b1abb5'}}>Get in Touch</h3><hr/>
                        <h4>Email:yehya4471@gmail.com</h4>
                        <h4>Mobile:+00966-569455309</h4>
                        </div>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
