import React, {Component} from 'react'
import'./Login.css'

class Login extends Component {
    render(){
        return (
            <div className="column">
                <div className="row">
            <h2>Log-in Page</h2>
            <label>Username</label>
            <input type="text" name= "username" placeholder="username"/>
            <label>Password</label>
            <input type="password" name= "password" placeholder="Password"/>
            </div>
            </div>
        )
    }
}

export default Login;