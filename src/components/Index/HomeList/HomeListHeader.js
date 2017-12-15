import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

     class HomeListHeader extends Component {
        render(){
            return(<div className = "HomeListHeader">
                <NavLink exact className ='HomeListHeaderA' to='/'>全部</NavLink>
                <NavLink className ='HomeListHeaderA' to='/good'>精华</NavLink>
                <NavLink className ='HomeListHeaderA' to='/share'>分享</NavLink>
                <NavLink className ='HomeListHeaderA' to='/ask'>问答</NavLink>
                <NavLink className ='HomeListHeaderA' to='/job'>招聘</NavLink>
            </div>)
        }
    }

export default HomeListHeader;