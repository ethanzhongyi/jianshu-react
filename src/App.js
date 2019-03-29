import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Globalstyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle></Globalstyle>
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>    
    )
	}
}

export default App;