import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';

class Detail extends PureComponent {
    render() {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号'></Input>
            <Input placeholder='密码'></Input>
            <Button>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
}

const mapState =(state) => {
  return {
    
  }
}

const mapDispatch = (dispatch) => {
  return {
    
  }
}

export default connect(mapState, mapDispatch)(Detail);