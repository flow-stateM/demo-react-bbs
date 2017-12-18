import axios from 'axios';



const MATCH = 'MATCH';
const FAIL = 'FAIL'
export function matchReducer(state={NoData:true},action){
    if(action.type === MATCH){
        return {NoData:false,fail:true,data:action.data};
    }
    if(action.type ===FAIL){
        return {NoData:false,fail:false}
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
        // console.log(matchName);
        axios.get('/api/v1/topics',{
            params:{
                tab:`${matchName}`
            }
        }).then((data)=>{
            dispatch(getData(data))
        }).catch(()=>{
            dispatch(failFn())
        })
    };
}