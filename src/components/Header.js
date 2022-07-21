import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <p className="app-title">Quark</p>
                <p className="app-description">A rock-paper-scissors gachaventure.</p>
            </div>
        );
    }
}

export default Header;