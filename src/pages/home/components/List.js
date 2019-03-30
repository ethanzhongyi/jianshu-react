import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends Component {
    render() {
      const { list } = this.props;
      return (
        <div>
          {
            list.map((item) => {
              return (
                <ListItem key={item.get('id')}>
                  <img className='pic' alt='' src={item.get('imgUrl')}/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              )
            })
          }
          <LoadMore onClick={() => this.props.handleClick(this.props.page)}>加载更多</LoadMore>
        </div>
      )
      
    }
}

const mapState= (state) => {
  return {
    list: state.getIn(['home', 'articleList']) ,
    page: state.getIn(['home', 'articlePage'])
  }
};

const mapDispatch = (dispatch) => {
  return {
    handleClick(page) {
      dispatch(actionCreators.getMore(page))
    }
  }
}


export default connect(mapState, mapDispatch)(List);