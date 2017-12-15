import {combineReducers} from 'redux';
// import {navReducer} from './nav.redux';
import axios from 'axios';
//合并reducer

const MATCH = 'MATCH';
const FAIL = 'FAIL'
export function matchReducer(state={},action){
    if(action.type === MATCH){
        return {fail:true,data:action.data};
    }
    if(action.type ===FAIL){
        return {fail:false}
    }
    return state;
}

function getData(data){
    return {type:MATCH,'data':data};
}

function failFn(){
    return {type:FAIL}
}

export function matchFn(matchName){
    return dispatch => {
        console.log(matchName);
        axios.get('/api/v1/topics',{
            tab:`${matchName}`
        }).then((data)=>{
            dispatch(getData(data))
        }).catch(()=>{
            dispatch(failFn())
        })
    };
}


export default combineReducers({matchReducer})