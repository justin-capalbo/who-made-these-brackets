import React from 'react';
import { Component } from 'react';
import AppContainer from './container/AppContainer';
import Store from '../store/Store';

export class App extends Component {
  render() {
    return (
      <Store.Container>
        <AppContainer/>
      </Store.Container>
    );
  }
}