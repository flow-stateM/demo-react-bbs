import React, { Component } from 'react';
import {connect} from 'react-redux';
import {matchFn} from '../../../redux/match.redux';
import {ListItem} from './ListItem'

@connect(
    state => state.matchReducer,
    {matchFn}
)


     class HomeListContent extends Component {
        componentWillMount(){
            this.props.matchFn(this.props.match.url.substring(1));
        }



        render(){
            console.log(this.props.data?this.props.data.data.data:0);
            const jsxData =  this.props.data?this.props.data.data.data.map((item,index)=>{
                return <ListItem {...item} key={item.id} />
                }):null
            return(<div className="HomeListContent">
                {jsxData}
            </div>)
        }
    }

export default HomeListContent;