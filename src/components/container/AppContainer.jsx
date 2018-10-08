import React, { Component } from 'react';
import TextInput from '../Visual/TextInput';
import Store from '../../store/Store';

class AppContainer extends Component {
    constructor(props){
        super(props);
    }

    render () {
        let store = this.props.store;
        return <div>
            <TextInput onChange={store.set('num1')} value={store.get('num1')}/>
            <TextInput onChange={store.set('num2')} value={store.get('num2')}/>
            Sum: {store.get('num1') + store.get('num2')}
        </div>
    }
};

export default Store.withStore(AppContainer);
