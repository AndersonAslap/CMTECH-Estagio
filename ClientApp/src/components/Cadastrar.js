import React, { Component } from 'react';

export class Cadastrar extends Component {
    static displayName = Cadastrar.name;

    constructor(props) {
        super(props);
        this.state = { produto: '', qtd: '', preco: '' };
        this.inputProduto = this.inputProduto.bind(this); this.inputQtd = this.inputQtd.bind(this);
        this.preco = ''; this.inputPreco = this.inputPreco.bind(this);
        this.produto = ''; this.qtd = ''; this.handleSubmit = this.handleSubmit.bind(this);
    }
    inputProduto(event) {
        this.setState({ value: event.target.value });
        this.produto = event.target.value;
    }
    inputQtd(event) {
        this.setState({ value: event.target.value });
        this.qtd = event.target.value;
    }
    inputPreco(event) {
        this.setState({ value: event.target.value });
        this.preco = event.target.value;
    }
    handleSubmit(event) {
        event.preventDefault();
        const prod = this.produto; const qtnd = this.qtd; const prec = this.preco;
        if (qtnd == "5" && prec == "10" && prod == "produto") {
            alert("Cadastro realizado com sucesso.")
        }
        else if (qtnd <= "0") {
            alert("Erro ao realizar o cadastro. A quantidade de produtos deve ser maior que 0.")
        }
        else {
            alert("Erro ao realizar o cadastro.")
        }
    }
    render() {
        return (
            <div>
                <h1>Cadastrar produto</h1>
                <p>ID do produto:</p>
                <form>
                    <label>
                        <input type="text" produto={this.state.produto} onChange={this.inputProduto} />
                    </label>
                </form>
                <div>&nbsp;</div>
                <p>Quantidade:</p>
                <form>
                    <label>
                        <input type="text" qtd={this.state.qtd} onChange={this.inputQtd} />
                    </label>
                </form>
                <div>&nbsp;</div>
                <p>Preco:</p>
                <form>
                    <label>
                        <input type="text" qtd={this.state.preco} onChange={this.inputPreco} />
                    </label>
                </form>
                <div>&nbsp;</div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Cadastrar</button>
            </div>
        );
    }
}
