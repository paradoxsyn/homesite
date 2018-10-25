/**
 * Created by Paradox on 8/26/2018.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './HeaderComponents/Navbar'
import Body from './BodyComponents/Body'
import {Container} from 'semantic-ui-react'
import { body } from './navbar.css';
import Footer from './FooterComponents/Footer'
import BodyPortfolio from './BodyComponents/Body'

const Portfolio = () => {
    return (
        <div>
            <Navbar/>
            <p>PORTFOLIO</p>
            <BodyPortfolio/>
            <Footer/>
        </div>
    );
};

export default Portfolio;