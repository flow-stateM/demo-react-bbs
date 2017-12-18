import React, { Component } from 'react';
import {connect} from 'react-redux';
import {matchFn} from '../../../redux/match.redux';

@connect(
    state => state.matchReducer,
    {matchFn}
)


     class ListItem extends Component {
        render(){
            const {id,reply_count,visit_count,title} = this.props;
            return(<div key={id} className="ListItem">
                    <span className="res">{reply_count}</span>
                    <span className="symbol">/</span>
                    <span className="click">{visit_count}</span>
                    <span className="title">{title}</span>
                    <span className="time"></span>
                </div>)
        }
    }

export default ListItem;