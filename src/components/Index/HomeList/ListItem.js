import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {matchFn} from '../../../redux/match.redux';

// @connect(
//     state => state.matchReducer,
//     {matchFn}
// )


     class ListItem extends Component {
        _timeComputed(){
            const lastTime = this.props.last_reply_at;
            const reg = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d{2})(\..+)/;
            console.log(lastTime.replace(reg,'$1 $2 $3 $4:$5:$6'));
        }
        render(){
            const {id,reply_count,visit_count,title,author,last_reply_at} = this.props;
            return(<div key={id} className="ListItem clear">
                    <span><img src={author.avatar_url} alt='false'/></span>
                    <dfn className="listNum clear">
                        <span title={'回复数:'+reply_count} className="res">{reply_count}</span>
                        <span className="symbol">/</span>
                        <span title={'点击数:'+visit_count}  className="click">{visit_count}</span>
                    </dfn>
                    <span className="title">{title}</span>
                    <span className="time">{this._timeComputed()}</span>
                </div>)
        }
    }

export default ListItem;