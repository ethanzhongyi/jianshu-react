import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Detail extends PureComponent {
    render() {
      const { loginState } = this.props;
      if(!loginState) {
        return (
          <LoginWrapper>
            <LoginBox>
              <Input placeholder='账号' ref={(input) => {this.account = input}}></Input>
              <Input placeholder='密码' ref={(input) => {this.passwd = input}}></Input>
              <Button onClick={() => this.props.login(this.account,  this.passwd)}>登录</Button>
            </LoginBox>
          </LoginWrapper>
        )
      } else {
        return <Redirect to='/'/>
      }
      
    }
}

const mapState =(state) => {
  return {
    loginState: state.getIn(['login', 'login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(account, passwd) {
      dispatch(actionCreators.login(account.value, passwd.value));
    }
  }
}

export default connect(mapState, mapDispatch)(Detail);