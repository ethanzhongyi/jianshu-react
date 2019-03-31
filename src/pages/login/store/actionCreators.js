import * as actionTypes from './constants';
import axios from 'axios';

const changeLogin =() => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
  value: false
})

export const login = (account, passwd) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&passwd=' + passwd)
      .then((res) => {
          const result = res.data.data;
          if(result) {
            dispatch(changeLogin())
          } else {
            alert('登录失败！！！')
          }
        })
  }
}

