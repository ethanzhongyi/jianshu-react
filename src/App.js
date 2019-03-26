import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Globalstyle } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle></Globalstyle>
        <Header />
      </Fragment>    
    )
	}
}

export default App;