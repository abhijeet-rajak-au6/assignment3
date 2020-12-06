import React, { Component, Fragment } from 'react';

import '../Users/Login.css';

class Login extends Component {


    componentDidMount(){
        const body = document.querySelector("body");
        console.log(body);
        body.style.backgroundColor="white";
        const nav = document.querySelector('.mynav');
        nav.style.display="none";
    }
    handleLogin=(e)=>{
        const { history } = this.props;
        history.push("/dashboard");
    }
    render() {
        console.log(this.props.match);
        return (
            <Fragment>
                <div className="login-container">

                    <div className="logo">
                        LOGO
                    </div>
                    <h2 className="login-text">LOGIN</h2>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button onClick={this.handleLogin} className="btn btn-block">Login</button>
                </div>

                
            </Fragment>
            
        )
    }
}

export default Login;


