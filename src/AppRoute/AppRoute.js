import React, { Component } from 'react'
import { Switch,Route } from 'react-router'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import HomePage from '../Pages/HomePage'
import Servicepage from '../Pages/Servicepage'

export default class AppRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/service" component={Servicepage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                </Switch>
            </div>
        )
    }
}
