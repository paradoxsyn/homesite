/**
 * Created by Paradox on 8/20/2018.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './HeaderComponents/Navbar'
import Body from './BodyComponents/Body'
import {Container} from 'semantic-ui-react'
import { body } from './navbar.css';
import Footer from './FooterComponents/Footer'

const About = () => {
    return (
        <div>
            <Navbar/>
            <p>TESTABOUT</p>
            <Footer/>
        </div>
    );
};

export default About;