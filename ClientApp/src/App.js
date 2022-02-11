import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Listar } from './components/Listar';
import { Vender } from './components/Vender';
import { Cadastrar } from './components/Cadastrar';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/vender' component={Vender} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/listar' component={Listar} />
      </Layout>
    );
  }
}
