import React from 'react'

import './navbar.styles.scss'

import { ReactComponent as Logo } from "../assets/themthings.svg";
import Icon from "./icon.component";


const NavBar = props => (
    <nav className="navbar">
        <div className="container">
            <div className="menu">
                <Icon name='menu' /> MENU
            </div>
            <div className="logo">
            </div>
            <div className="subsrcibe">
                SUBSCRIBE <Icon name='plane' color={true} url='http://tomungerer.com/' />
            </div>
        </div>
    </nav>
)

export default NavBar