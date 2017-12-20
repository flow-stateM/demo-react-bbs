import React, { Component } from 'react';
import ListItem from './ListItem.js';
import {connect} from 'react-redux';
import {matchFn} from '../../../redux/match.redux';

@connect(
    state => state.matchReducer,
    {matchFn}
)

     class HomeListContent extends Component {
        componentWillMount(){
            this.props.matchFn(this.props.match.url.substring(1));
        }
        render(){
            const newData = this.props.data?this.props.data.data.data.map((item)=>{
                return <ListItem {...item} key={item.id}/>
            }):'';
            return(<div className="HomeListContent">
                {newData}
            </div>)
        }
    }

export default HomeListContent;