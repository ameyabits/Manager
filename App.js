import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import MyRouter from './MyRouter';

class App extends Component {
  componentWillMount() {
    //Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDaEI_avp6Qq1vLlZzpmjUG6w6lPTNg7FA',
      authDomain: 'manager-150.firebaseapp.com',
      databaseURL: 'https://manager-150.firebaseio.com',
      projectId: 'manager-150',
      storageBucket: '',
      messagingSenderId: '593964811720'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <MyRouter />
      </Provider>
    );
  }
}

export default App;
