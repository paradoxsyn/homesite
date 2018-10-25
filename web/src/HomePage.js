/**
 * Created by Paradox on 7/29/2018.
 */
import React, {Component} from 'react';
import Navbar from './components/HeaderComponents/Navbar'
import Body from './components/BodyComponents/Body'
import {Header, Menu, Container} from 'semantic-ui-react'

class HomePage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Body/>
            </div>
        )
    }
}

export default HomePage