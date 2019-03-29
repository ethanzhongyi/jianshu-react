import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Globalstyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle></Globalstyle>
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>    
    )
	}
}

export default App;