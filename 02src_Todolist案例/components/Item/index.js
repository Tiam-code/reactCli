import React,{Component} from 'react'
import './index.css'

export default class Item extends Component{

    state = {isMouseEnter:false}

    render(){
        const {todo} = this.props
        const {isMouseEnter} = this.state
        return (
            <li className='liContainer' onMouseEnter={this.mouseEnter(true)} onMouseLeave={this.mouseEnter(false)} style={{backgroundColor: isMouseEnter ? '#ddd' : 'white'}}>
                <div>
                    <input type='checkbox' checked={todo.done} onChange={this.handleChange(todo.id)}/>
                    <span>{todo.name}</span>
                </div>
                <button style={{display: isMouseEnter ? 'block' : 'none'}} onClick={(event)=>this.del(todo.id,event)}>删除</button>
            </li>
        )
    }

    mouseEnter = (flag) => {
        return ()=>{
            this.setState({isMouseEnter:flag})
        }
    }

    //Item是子组件，需要去改变App中的state，解决方法与子组件向父组件传值一样
    handleChange = (id)=>{
        const {updateData} = this.props
        return (event)=>{
            updateData(id,event.target.checked)
            console.log(id,event.target.checked)
        }
    }

    del = (id,event)=>{
        const {deleteData} = this.props
        //使用windows自带的confirm，点击确定返回true，点击取消返回false
        if(window.confirm('确定删除吗?')){
            deleteData(id)
        }

    }
}