import {login} from '../services/example';
import {parse} from 'qs';

export default{
    namespace:'app',
    state:{
        login:false,
        loading:false,
        user:{
            name:'***'
        },
         loginButtonLoading: false,
    },
    // subscriptions:{
    //     setup({dispatch}){
    //         dispatch({type:''});    
    //     }
    // },
    effects:{
        *login({payload},{call,put}){
            // yield put({type:'showLogionLonding'});
            const data =yield call(login,parse(payload));
            console.log(data);
        }
    }
}