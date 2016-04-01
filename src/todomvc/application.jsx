import React from 'react';
import { Provider } from 'react-redux';
import createStore from "./create-store";
import Home from './home';

// 生成store
const store = createStore();

export default class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}