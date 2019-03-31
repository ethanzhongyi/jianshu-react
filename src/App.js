import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Globalstyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle></Globalstyle>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/write' exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>    
    )
	}
}

export default App;