import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './nav.css';
class Nav extends Component {

    state = {
        navigation : false
    }
    handleClick = () => {
        this.setState({ navigation: true });
    }

    handleClose = () => {
        this.setState({ navigation: false });
    }
    render() {
        return (


            this.state.navigation ?
                <div className="Navfull">
                    <nav className="top-right open">
                        <div><a>
                        </a></div>
                        <div><a href="pecfest2016" className="disc l0">
                            <div>Pecfest 2017</div>
                        </a>
                        </div>
                        <div >

                            <a href = "activities" className="disc l1">
                                <div>Events</div>
                            </a>

                        </div>
                        <div>
                            <a href = "sponsors" className="disc l2">
                                <div>Sponsors</div>
                            </a>
                        </div>
                        <div>
                        <a href = "team" className="disc l3">
                            <div>Team</div>
                        </a>
                        </div>
                        <div>
                        <a href = "hospitality" className="disc l4">
                            <div>Hospitality</div>
                        </a>
                        </div>
                        <div>
                            <a href = "social"  className="disc l5">
                                <div>Social</div>
                            </a>
                        </div>
                        <div href = ""  className="disc l6">
                            <a >
                                <div>Home</div>
                            </a>
                        </div>
                        <a className="disc l7 toggle" onClick={() => {this.handleClose()}}>
                            Close
                        </a>
                    </nav>
                </div>:
                <div className="App">

                    <nav className="top-right2 closed">

                        <a className="disc l8 toggle" onClick={() => {this.handleClick()}}>
                            Menu
                        </a>
                    </nav>
                </div>

        );
    }
}

export default Nav;
