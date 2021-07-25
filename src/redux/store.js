// 该文件创建redux的最核心属性store
import {createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducer/count'
import personReducer from './reducer/person'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension/index";

//合并reducer,combineReducers中传入的对象就是在store中存储的状态对象，不同的组件通过key来表示自己的状态
const reducers = combineReducers({
    count:countReducer,
    personArr:personReducer
})
// 指定store的处理方法:reducer
const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store