import React, { Component } from 'react';
import TextInput from '../Visual/TextInput';
import Store, { StoreProp } from '../../store/Store';

class AppContainer extends Component<StoreProp> {
    render () {
        const store = this.props.store;
        return <div>
            <h1>Grackets Test</h1>
            <TextInput onChange={store.set('num1')} value={store.get('num1')}/>
            <TextInput onChange={store.set('num2')} value={store.get('num2')}/>
            Sum: {store.get('num1') + store.get('num2')}
        </div>
    }
};

export default Store.withStore(AppContainer);
