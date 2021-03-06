import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
    render() {
      const { loginState } = this.props;
      if(!loginState) {
        return (
          <div>post article</div>
        )
      } else {
        return <Redirect to='/login'/>
      }
      
    }
}

const mapState =(state) => {
  return {
    loginState: state.getIn(['login', 'login'])
  }
}


export default connect(mapState, null)(Write);