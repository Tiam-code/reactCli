import React, {Component} from 'react';
//引入store获取state
import store from './redux/store'
//引入actionCreator
import {addAction,descAction} from './redux/count_action'

class App extends Component {

    // componentDidMount() {
    //     //经过reducer处理之后返回的状态，需要再次渲染到页面上
    //     //subscribe用于监听store中state的变化情况，只要变化，那么执行回调参数
    //     store.subscribe(()=>{
    //         //由于setState设置状态是累加的，所以这句代码不会对state有影响，只是为了使react调用render
    //         this.setState({})
    //     })
    // }

    add = ()=> {
        const selectValue = parseInt(this.selectNode.value)
        //通过dispatch（）来将action传递给store
        // store.dispatch({type:"add",data:selectValue})
        store.dispatch(addAction(selectValue))
    }

    decr = ()=> {
        const selectValue = parseInt(this.selectNode.value)
        //通过dispatch（）来将action传递给store
        // store.dispatch({type:"desc",data:selectValue})
        store.dispatch(descAction(selectValue))
    }

    addOnlyJS = ()=> {
        //从store获取当前的状态
        const count = store.getState()
        if(count >0 && count%2 === 1){
            const selectValue = parseInt(this.selectNode.value)
            // store.dispatch({type:"add",data:selectValue})
            store.dispatch(addAction(selectValue))
        }
    }

    addAsync = ()=>{
        const selectValue = parseInt(this.selectNode.value)
        setTimeout(()=>{
            // store.dispatch({type:"add",data:selectValue})
            store.dispatch(addAction(selectValue))
        },500)
    }

    render() {
        // const {count} = this.state
        //通过调用getState()来获取状态
        const count = store.getState()
        return (
            <div>
                <h1>当前求和为：{count}</h1>
                <select ref = {node => this.selectNode = node} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.decr}>-</button>
                <button onClick={this.addOnlyJS}>为奇数才加</button>
                <button onClick={this.addAsync}>异步加</button>
            </div>
        );
    }
}

export default App;
