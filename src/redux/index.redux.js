import {combineReducers} from 'redux';
// import {navReducer} from './nav.redux';
//合并reducer
import {matchReducer} from './match.redux'




export default combineReducers({matchReducer})