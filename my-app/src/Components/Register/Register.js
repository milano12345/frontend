import React, { Component } from 'react';
import "./register.css"
class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: null,
            lastName: null,
            Email: null,
            Password: null, 
            formErrors: {
                firstName: '',
                lastName: '',
                Email: '',
                Password: '',
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Account</h1>
                <br/>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className=""
                            placeholder="First Name"
                            name="firstName"
                            onChange={this.handleChange}
                            noValidate
                        /> <br/>
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className=""
                            placeholder="Last Name"
                            name="lastName"
                            onChange={this.handleChange}
                            noValidate
                        /> <br/>
                    </div>
                    <div className="Email">
                        <label htmlFor="Email">E-Mail</label>
                        <input
                            type="email"
                            className=""
                            placeholder="E-Mail"
                            name="Email"
                            onChange={this.handleChange}
                            noValidate
                        /> <br/>
                    </div>
                    <div className="Password">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            className=""
                            placeholder="Password"
                            name="Password"
                            onChange={this.handleChange}
                            noValidate
                        /> <br/>
                    </div>
                    <div className="createAccount">
                    <button type="submit">Create Account</button>
                    <small>Already have an account?</small>
                    </div>
                </form>

            </div>
        </div>
        )
    }
}

export default Register;