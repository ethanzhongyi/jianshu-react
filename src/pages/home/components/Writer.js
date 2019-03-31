import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterItem, WriterInfo} from '../style';

class Writer extends PureComponent {
    render() {
      const { list } = this.props;
      return (
        <div>
          {
            list.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <img className='pic' alt='' src={item.get('imgUrl')}/>
                  <WriterInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </WriterInfo>
                </WriterItem>
              )
            })
          }
        </div>  
      )
    }
}

const mapProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
});

export default connect(mapProps, null)(Writer);