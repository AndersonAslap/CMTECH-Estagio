import React, { Component } from 'react';

export class Vender extends Component {
    static displayName = Vender.name;

    constructor(props) {
        super(props);
        this.state = { produto: '', qtd: '', };
        this.inputProduto = this.inputProduto.bind(this); this.inputQtd = this.inputQtd.bind(this);
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
    handleSubmit(event) {
        event.preventDefault();
        const prod = this.produto; const qtnd = this.qtd;
        if (qtnd > 0 && prod === "produto") {
            alert("Venda realizada com sucesso.")
        }
        else if (qtnd <= 0) {
            alert("Erro ao realizar a venda. A quantidade de produtos deve ser maior que 0.")
        }
        else {
            alert("Erro ao realizar a venda. Produto nao encontrado.")
        }
    }
    render() {
        return (
            <div>
                <h1>Vender produto</h1>
                <p>ID do produto:</p>
                <form>
                    <label>
                        <input type="text" produto={this.state.produto} onChange={this.inputProduto} />
                    </label>
                </form>
                <div>&nbsp;</div>
                <p>Quantidade a ser vendida:</p>
                <form>
                    <label>
                        <input type="text" qtd={this.state.qtd} onChange={this.inputQtd} />
                    </label>
                </form>
                <div>&nbsp;</div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Vender</button>
            </div>
        );
    }
}
