/**
 * Created by Paradox on 8/20/2018.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './HeaderComponents/Navbar'
import {Container} from 'semantic-ui-react'
import { body } from './home.css';
import Footer from './FooterComponents/Footer'
import Melodi from './BodyComponents/Melodi'

const Projects = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                  <Melodi/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Projects;