/**
 * Created by Paradox on 8/29/2018.
 */
import React, {Component} from 'react';
import {Header, Menu, Container, Grid} from 'semantic-ui-react'
import styles from './melodi.css'

const Melodi = () => {
    return (
        <div>
            <div className="ui internally celled stackable grid">
                <div className="row">
                    <div className="three wide column center aligned middle aligned">
                        <h1>Melodi</h1>
                    </div>
                    <div className="ten wide column">
                        <div className={styles.melodi_title}>
                            <img src={require('./titlemelo.png')}/>
                        </div>
                    </div>
                    <div className="three wide column">
                        <p>Ever wanted to do cool tricks to your favorite songs in a 2d pixel world? Say no more.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="three wide column center aligned middle aligned">
                        <h1>Filler</h1>
                    </div>
                    <div className="ten wide column">
                        <div className={styles.melodi_title}>
                            <img src={require('./titlemelo.png')}/>
                        </div>
                    </div>
                    <div className="three wide column">
                        <p>Filler</p>
                    </div>
                </div>
                <div className="row">
                    <div className="three wide column center aligned middle aligned">
                        <h1>Filler</h1>
                    </div>
                    <div className="ten wide column">
                        <div className={styles.melodi_title}>
                            <img src={require('./titlemelo.png')}/>
                        </div>
                    </div>
                    <div className="three wide column">
                        <p>Filler</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Melodi;