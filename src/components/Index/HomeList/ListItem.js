import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {matchFn} from '../../../redux/match.redux';

// @connect(
//     state => state.matchReducer,
//     {matchFn}
// )


     class ListItem extends Component {
        _timeComputed(last_reply_at){
            const lastTime = this.props.last_reply_at;
            const reg = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d{2})(\..+)/;
            const changeTime =parseInt((Date.now()-new Date(lastTime.replace(reg,'$1 $2 $3 $4:$5:$6')).getTime())/1000,10);
            if(changeTime/60<60){
                return `${Math.round(changeTime/60)}分钟前`;
            }
            else if(changeTime/60>60 &&changeTime/60<1440){
                return `${Math.round(changeTime/60/60)}小时前`;
            }else{
                return `${Math.floor(changeTime/60/60/24)}天前`
            }
        }
        render(){
            const {id,reply_count,visit_count,title,author,last_reply_at} = this.props;
            return(<div key={id} className="ListItem clear">
                    <span className="imgContainer"><img src={author.avatar_url} alt=""/></span>
                    <dfn className="listNum clear">
                        <span title={'回复数:'+reply_count} className="res">{reply_count}</span>
                        <span className="symbol">/</span>
                        <span title={'点击数:'+visit_count}  className="click">{visit_count}</span>
                    </dfn>
                    <span className="title">{title}</span>
                    <span title={'最后回复于'+this._timeComputed(last_reply_at)+''} className="time">{this._timeComputed(last_reply_at)}</span>
                </div>)
        }
    }

export default ListItem;