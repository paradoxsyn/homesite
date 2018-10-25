/**
 * Created by Paradox on 8/22/2018.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'semantic-ui-react'
import styles from './footer.css';

const Footer = () => {
    return (
        <div className="App">
            <div className="App-header">
                <div className="ui inverted vertical footer segment">
                    <div className="ui container center aligned">
                        <a href="https://github.com/paradoxsyn">
                            <i className="github huge icon">
                            </i>
                        </a>
                        <a href="https://linkedin.com/in/paradoxsyn">
                            <i className="linkedin huge icon">
                            </i>
                        </a>
                        <div className={styles.footer_league_img}>
                            <a href="www.google.com">
                                <img src={require('./leagueicon.png')} />
                            </a>
                        </div>
                        <div className={styles.footer_wow_img}>
                            <a href="www.google.com">
                                <img src={require('./wowicon.png')} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;