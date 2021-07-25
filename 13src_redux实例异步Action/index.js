import react from 'react'
import reactDom from 'react-dom'
import App from './App'
import store from "./redux/store";

//注意初始页面渲染还需要下面这段代码
reactDom.render(<App/>,document.getElementById('root'))
//只要store中的状态发生变化，就会通过render对整个页面重新渲染，由于有diff算法的存在，所以效率不会很低
store.subscribe(()=>{
    reactDom.render(<App/>,document.getElementById('root'))
})