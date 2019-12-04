import React, {Component} from 'react';
import './Header.css';

 
    // render(){
    // const Header = function () {
        const Header = function (props) {
        return(
            // <div style = {headerStyle}>
                /* /* {this.props.title}  */ 
                <div className="header">
                 {props.heading}
            </div>
        )
    }



export default Header;