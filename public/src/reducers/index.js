/**
 * Created by lipeishang on 17-4-28.
 */
import {combineReducers} from 'redux'
import counterReducer from './counter'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    sum: counterReducer
});

export default rootReducer;