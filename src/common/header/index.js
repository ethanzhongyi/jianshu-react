import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchInfo
} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';

//没有业务逻辑可以写成 无状态组件(函数)，性能更好
class Header extends Component {
  getListArea() {
    const {focused, list, page, totalPage, mouseIn,handleMouseEnter, handleMouseLeave, handleClick} = this.props
    const pageList = [];
    const newList = list.toJS();

    if(newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={() => handleClick(page, totalPage, this.spinIcon)}>
              <i ref={(spin) => {this.spinIcon = spin}} className='iconfont spin'>&#xe626;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const {focused, handleInputFocus, handleInputBlur, list, login} = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          { login 
            ? <NavItem className='right'>退出</NavItem>
            : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>}
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe609;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6af;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseIn());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseOut());
    },
    handleClick(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if(page < totalPage) {
        dispatch(actionCreators.changPage(page + 1));
      }else {
        dispatch(actionCreators.changPage(1));
      }
      
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);