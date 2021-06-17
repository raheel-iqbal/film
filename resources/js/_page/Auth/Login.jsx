import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { userActions } from '../../_actions';

function Login() {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const handleLogin = async (e) => {
    //
    //     Toast.loading('loading');
    //
    //     e.preventDefault();
    //
    //     axios.defaults.withCredentials = true
    //
    //     // LOGIN
    //     await axios.post(`${BASE_URL}/api/login`, {
    //         email: email,
    //         password: password,
    //     })
    //         .then(
    //             (response) => {
    //                 localStorage.setItem('token', response.data.access_token);
    //                 localStorage.setItem('redirect_dashboard', response.data.redirect_dashboard);
    //                 Toast.hide();
    //                 window.location.href = response.data.redirect_dashboard;
    //             },
    //             // LOGIN ERROR
    //             (error) => {
    //                 console.log(error)
    //             }
    //         )
    // }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !email ? ' is-invalid' : '')}
                                />
                                {submitted && !email &&
                                    <div className="invalid-feedback">Email is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !password ? ' is-invalid' : '')}
                                />
                                {submitted && !password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login };

