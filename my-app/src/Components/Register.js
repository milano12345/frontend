 import React, {Component} from 'react';

 class Register extends Component {
     render(){
         <div className="wrapper">
             <div className="form-wrapper">
                 <h1>Create Account</h1>
                 <form onSubmit={this.handleSubmit} noValidate></form>
             </div>
         </div>
     }
 }

 export default Register;