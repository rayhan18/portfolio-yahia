import React, { Component } from 'react'
import AboutMe from '../Component/About/AboutMe'
import Footer from '../Component/Footer/Footer'
import ButtonAppBar from '../Component/Navigation/ButtonAppBar'
import TopBanner from '../Component/TobBanner/TopBanner'

export default class  extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                 <TopBanner/>
               
              
                  
                <AboutMe/>
              <Footer/>
            </div>
        )
    }
}
