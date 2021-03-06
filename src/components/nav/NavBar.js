import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    render() {

        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill decNav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notes">Notes</Link>
                        </li>
                        <li className=
                            "nav-item">
                            <Link className="nav-link" to="/login" onClick={this.props.handleLogout}>Log Out</Link>
                        </li>

                </ul>
            </nav>
                )
            }
        }

        export default NavBar
