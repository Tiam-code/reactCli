import react,{Component} from 'react'
import {connect} from "react-redux";
import {addAction} from "../../redux/count_action";

//定义UI组件
class Count extends Component{
    add = ()=>{
        //获取select的值
        const selectValue = parseInt(this.selectNode.value)
        const {add} =this.props
        add(selectValue)
    }
    render(){
        //从容器组件中获取状态
        const {count} = this.props
        return (
            <div>
                <h1>当前的Count值为：{count}</h1>
                <select ref={(node)=>{this.selectNode = node}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}
//connect传递的两个参数
const MapStateToProps = (state)=>{
    return {count:state}
}
const MapDispatchToProps = {
    add : addAction
}
//定义容器组件
const CountContainer = connect(MapStateToProps,MapDispatchToProps)(Count)

export default CountContainer