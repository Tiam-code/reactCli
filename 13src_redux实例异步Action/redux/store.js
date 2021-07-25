// 该文件创建redux的最核心属性store
import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'

// 指定store的处理方法:reducer
const store = createStore(countReducer,applyMiddleware(thunk))

export default store