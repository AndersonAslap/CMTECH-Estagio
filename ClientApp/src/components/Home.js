import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', };
        this.inputPassword = this.inputPassword.bind(this); this.inputUsername = this.inputUsername.bind(this);
        this.password = ''; this.usename = ''; this.handleSubmit = this.handleSubmit.bind(this);
    }
    inputPassword(event) {
        this.setState({ value: event.target.value });
        this.password = event.target.value;
    }
    inputUsername(event) {
        this.setState({ value: event.target.value });
        this.username = event.target.value;
    }
    handleSubmit(event) {
        event.preventDefault();
        const senha = this.password; const usr = this.username;
        if (senha === "123" && usr === "user") {
            alert("Login realizado com sucesso.")
        }
        else {
            alert("Usuario e/ou senha incorreto(s).")
        }
    }
    render() {
        return (
            <div>
                <h1>Login de usuario</h1>
                <form>
                    <label>
                        <p>usuario</p>
                        <input type="text" username={this.state.username} onChange={this.inputUsername} />
                    </label>
                </form>
                <div>&nbsp;</div>
                <form>
                    <label>
                        <p>senha</p>
                        <input type="password" password={this.state.password} onChange={this.inputPassword} />
                    </label>
                </form>
                <div>&nbsp;</div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
            </div>
        );
    }
}