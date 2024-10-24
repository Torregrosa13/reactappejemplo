import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                    <div className="container-fluid">
                        <h2 className="navbar-brand" >Crud Ejemplo</h2>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">Create</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
                                </li>
                                <select>

                                </select>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
