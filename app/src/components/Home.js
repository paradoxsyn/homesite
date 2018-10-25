/**
 * Created by Paradox on 8/4/2018.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './HeaderComponents/Navbar'
import Body from './BodyComponents/Body'
import Footer from './FooterComponents/Footer'
import {Container} from 'semantic-ui-react'
import { body } from './home.css';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;