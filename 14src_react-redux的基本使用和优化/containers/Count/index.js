import {connect} from "react-redux";
import React, {Component} from 'react';
import {addAction,descAction,addAsyncAction} from "../../redux/count_action";

//Count的UI组件
class Count extends Component {
    add = ()=> {
        const selectValue = parseInt(this.selectNode.value)
        const {add} = this.props
        add(selectValue)
    }

    decr = ()=> {
        const selectValue = parseInt(this.selectNode.value)
        const {desc} = this.props
        desc(selectValue)
    }

    addOnlyJS = ()=> {
        const selectValue = parseInt(this.selectNode.value)
        const {count,add} = this.props
        if(count>0 && count%2 !==0){
            add(selectValue)
        }
    }

    addAsync = ()=>{
        const selectValue = parseInt(this.selectNode.value)
        const {addAsync} = this.props
        addAsync(selectValue,500)
    }

    render() {
        const {count} = this.props
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
//mapStateToProps，value就作为props中的value——状态
//mapStateToProps函数是react-redux调用的，用于从redux中获取状态（内部调用store.getState()）
const mapStateToProps = (state)=>{
    return {count:state}
}

//mapDispatchToProps函数的返回对象中的key就作为props中的key，value就作为props中的value——操作状态的方法
//react-redux会自动调用dispatch方法将对象传递给store，同时将dispatch（）作为参数
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         add:(data)=>{dispatch(addAction(data))},
//         desc:(data)=>{dispatch(descAction(data))},
//         addAsync:(data,time) =>{dispatch(addAsyncAction(data,time))}
//     }
// }

//mapDispatchToProps的简写形式，作为对象传递
const mapDispatchToProps = {
    add:addAction,
    desc:descAction,
    addAsync:addAsyncAction
}

//connect用于将容器组件和UI组件建立联系,connect的参数有两个，并且都是函数
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(Count)

export default CountContainer