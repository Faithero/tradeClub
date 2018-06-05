import {combineReducers} from 'redux'
import {userReducer} from '../reduxs/user.redux'

const rootReducer = combineReducers({  // 合并规则
    user: userReducer
})

export default rootReducer
