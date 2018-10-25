/**
 * Created by Paradox on 7/29/2018.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Header, Menu, Container} from 'semantic-ui-react'

class Navbar extends Component{
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <Header inverted as="h1">Welcome!</Header>
                    <div className="ui stackable four item menu center aligned hidden inverted">
                        <a className="active item">Home</a>
                        <a className="active item">Projects</a>
                        <a className="active item">Portfolio</a>
                        <a className="active item">About</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;