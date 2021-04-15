import React, { Component } from 'react'
import ExtraService from '../Component/Service/ExtraService'
import MyExperience from '../Component/Service/MyExperience'
import Service from '../Component/Service/Service'

export default class Servicepage extends Component {
    render() {
        return (
            <div>
                {/* <Service/> */}
                <MyExperience/>
                {/* <ExtraService/> */}
            </div>
        )
    }
}
