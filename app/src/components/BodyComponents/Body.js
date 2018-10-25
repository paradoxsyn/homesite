/**
 * Created by Paradox on 8/1/2018.
 */
import React, {Component} from 'react';
import {Header, Menu, Container, Grid} from 'semantic-ui-react'
import styles from './body.css'

const BodyHome = () =>{
        return(
            <div>
                <div className={styles.readable_text}>
                    <div className="ui vertical stripe segment">
                        <div className="ui middle center aligned stackable grid container">
                            <div className="row transparent">
                                <div className="eight wide column">
                                    <h3 className="ui header inverted">Well hello there stranger</h3>
                                    <p>It seems you've stumbled upon my pocket void, enjoy!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.readable_text}>
                    <div className="ui vertical stripe segment">
                        <div className="ui middle center aligned stackable grid container">
                            <div className="row transparent">
                                <div className="eight wide column">
                                    <h3 className="ui header inverted">-What makes me tick-</h3>
                                    <p className={styles.font_color}>I'm a Software Developer.</p>
                                    <p className={styles.font_color}>Offically, I write code in multiple different languages on several platforms; A lot of it. </p>
                                    <p className={styles.font_color}>But really? I'm a problem solver at my core. Constantly brainstorming ways to elevate the human(as well as animal) condition
                                    to new heights. To allow others to grow and learn from the plethora of perspectives technology can offer us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui horizontal divider">
                    <p className={styles.font_color}>And</p>
                </div>
                <div className={styles.readable_text}>
                    <div className="ui vertical stripe segment">
                        <div className="ui middle center aligned stackable grid container">
                            <div className="row transparent">
                                <div className="eight wide column">
                                    <h3 className="ui header inverted">-I'm an avid competitive gamer-</h3>
                                    <p className={styles.font_color}>I dabble in Smash, League, and what's left of the WoW competitive scene :^)</p>
                                    <p className={styles.font_color}>Any business inquiries can be directed to paradoxsyn@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

const BodyPortfolio = () =>{
    return(
        <div>
            <p>Children Inc</p>
        </div>
    )
};

export default BodyHome