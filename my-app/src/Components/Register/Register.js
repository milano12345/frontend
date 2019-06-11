import React, { Component } from 'react';
import "./register.css"
class Register extends Component {
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
                            type="text"
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
                            type="text"
                            className=""
                            placeholder="Password"
                            name="Password"
                            onChange={this.handleChange}
                            noValidate
                        /> <br/>
                    </div>
                    <button type="submit">Register</button>
                </form>

            </div>
        </div>
        )
    }
}

export default Register;