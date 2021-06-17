import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { userActions } from '../../_actions';

function Register() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleRegister(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.name && user.email && user.password && user.password_confirmation) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>

                            <div className="form-group">
                                <label>Full name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Full Name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !user.name ? ' is-invalid' : '')}
                                />
                                {submitted && !user.name &&
                                    <div className="invalid-feedback">Full Name is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')}
                                />
                                {submitted && !user.email &&
                                <div className="invalid-feedback">Email is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}
                                />
                                {submitted && !user.password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    name="password_confirmation"
                                    value={user.password_confirmation}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !user.password_confirmation ? ' is-invalid' : '')}
                                />
                                {submitted && !user.password_confirmation &&
                                    <div className="invalid-feedback">Confirm Password is required</div>
                                }
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered
                                <Link to={"/login"}> Login?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Register };
