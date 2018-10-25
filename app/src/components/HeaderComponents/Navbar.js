/**
 * Created by Paradox on 7/29/2018.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Header,Menu,Container,Reveal} from 'semantic-ui-react'
import styles from '../navbar.css'

const Navbar = () =>{
        return(
            <div className="App">
                <div className={styles.app_header}>
                    <div className="ui stackable four secondary menu center aligned hidden inverted">
                        <Link to='/' className="active link item grey float right">Home</Link>
                        <Link to='/projects' className="active link item grey float right">Projects</Link>
                        <div className={styles.navbar_title_img}>
                            <img src={require('./icon4.png')} />
                        </div>
                        <Link to='/portfolio' className="active link item grey float left">Portfolio</Link>
                        <Link to='/about' className="active link item grey float left">About</Link>
                    </div>
                </div>
            </div>
        )

};

export default Navbar;