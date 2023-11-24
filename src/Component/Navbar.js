import React from 'react'
import PropType from 'prop-types'
import {Link} from "react-router-dom"

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" to="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Hero">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Textform">Pricing</Link>
                        </li>

                    </ul>

                </div>
                <div className={`form-check form-switch-${props.mode === 'dark'? 'dark' : 'Light'} `}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />

                    <label className="form-check-label" HTMLFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </nav>
        </div>
    )
}
