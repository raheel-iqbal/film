import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NotFound } from "./_page/NotFound";
import { Login, Register } from "./_page/Auth";
import { Dashboard } from "./_page/Dashboard";
import { Films, addFilms } from "./_page/Films";

import { PrivateRoute } from './_components/PrivateRoute';
import {userActions} from "./_actions";
import { history } from './_helpers';

function Main() {

    const dispatch = useDispatch();

    const loggingIn = useSelector(state => state.authentication.loggedIn);
    let userData = useSelector(state => state.authentication.user);
    userData = loggingIn ? JSON.parse(userData) : {};
    const logoutHandler = async (e) => {
        e.preventDefault();
        dispatch(userActions.logout());
    }

    return (
        <Router history={history}>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to={"/films"}>Film App</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            {(() => {
                                if(loggingIn) {
                                    return (
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item" >
                                                <Link className="nav-link" to={"/dashboard"}>Dashboard</Link>
                                            </li>
                                            <li className="nav-item" >
                                                <Link className="nav-link" to={"/films"}>Manage Films</Link>
                                            </li>
                                            <li className="nav-item" >
                                                <a className="nav-link" href="" onClick={logoutHandler}>Logout</a>
                                            </li>
                                        </ul>
                                    );
                                } else {
                                    return (
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/login"}>Login</Link>
                                            </li>
                                            <li className="nav-item" >
                                                <Link className="nav-link" to={"/register"}>Register</Link>
                                            </li>
                                        </ul>
                                    );
                                }
                            })()}
                        </div>
                    </div>
                </nav>

                <div className="auth-wrapper container">
                    <div className="auth-inner">

                        <Switch>
                            <PrivateRoute path="/dashboard" component={Dashboard} exact />
                            <PrivateRoute path="/films" component={Films} exact />
                            <PrivateRoute path="/add-film" component={addFilms} exact />
                            <Route path='/' component={Login} exact />
                            <Route path="/login" component={Login} exact />
                            <Route path="/register" component={Register} exact />
                            <Route component={NotFound}/>
                        </Switch>

                    </div>
                </div>
            </div>

        </Router>
    );
}

export default Main;
