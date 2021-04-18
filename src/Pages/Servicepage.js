import React, { Component } from 'react'
import ButtonAppBar from '../Component/Navigation/ButtonAppBar'
import ExtraService from '../Component/Service/ExtraService'
import MyExperience from '../Component/Service/MyExperience'
import Service from '../Component/Service/Service'

export default class Servicepage extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
                {/* <Service/> */}
                <MyExperience/>
                <ExtraService/>
            </div>
        )
    }
}
