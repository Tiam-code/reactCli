// 该文件创建redux的最核心属性store
import {createStore} from 'redux'
import countReducer from './count_reducer'

// 指定store的处理方法:reducer
const store = createStore(countReducer)

export default store