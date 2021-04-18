import React, { Component } from 'react'
import AboutMe from '../Component/About/AboutMe'
import Footer from '../Component/Footer/Footer'
import ButtonAppBar from '../Component/Navigation/ButtonAppBar'

import ExtraService from '../Component/Service/ExtraService'
import MyExperience from '../Component/Service/MyExperience'
import Service from '../Component/Service/Service'
import TopBanner from '../Component/TobBanner/TopBanner'
import Servicepage from './Servicepage'

export default class HomePage extends Component {
    render() {
        return (
            <div>
          <ButtonAppBar/>
                <TopBanner/>
                 <Service/>
                <MyExperience/> 
                 <ExtraService/>  
                <AboutMe/>
              <Footer/>
            </div>
        )
    }
}
