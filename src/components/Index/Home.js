import React, { Component } from 'react';
import NavBar from '../Public/NavBar';
import HomeList from './HomeList/HomeList';
import Adv from './HomeList/Adv'
// import {connect} from 'react-redux';
// import {matchFn} from '../../redux/index.redux';

// @connect(
//     state=>state.matchReducer,
//     {matchFn}
// )



     class Home extends Component {
        render(){
            return(
                <div className='index'>
                    <NavBar />
                    <div className="mainContainer">
                        <div className='main clear'>
                            <HomeList />
                            <Adv />
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Home;
