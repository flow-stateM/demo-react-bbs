import React, { Component } from 'react';
import {connect} from 'react-redux';
import {matchFn} from '../../../redux/index.redux'

@connect(
    state => state.matchReducer,
    {matchFn}
)


     class HomeListContent extends Component {
        componentWillMount(){
            this.props.matchFn(this.props.match.url.substring(1))
        }
        render(){
            // this.props.matchFn(this.props.match.url.substring(1))
            // if(!this.props.fail) return(<div className="error"></div>)
            console.log(this.props);
            // this.props.matchFn(this.props.match.url.substring(1))
            return(<div className="HomeListContent">
            </div>)
        }
    }

export default HomeListContent;