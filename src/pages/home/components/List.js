import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
      const { list } = this.props;
      return (
        <div>
          {
            list.map((item) => {
              return (
                <Link key={item.get('id')} to='/detail'>
                  <ListItem >
                    <img className='pic' alt='' src={item.get('imgUrl')}/>
                    <ListInfo>
                      <h3 className='title'>{item.get('title')}</h3>
                      <p className='desc'>{item.get('desc')}</p>
                    </ListInfo>
                  </ListItem>
                </Link>
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