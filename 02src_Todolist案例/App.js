import React,{Component} from 'react'
import {nanoid} from 'nanoid'
import Header from "./components/Header";
import List from "./components/List";
import './App.css'
import Footer from "./components/Footer";

//记住：状态和改变状态的函数永远在一个组件内
export default class App extends Component{
    state = {lists:[
            {id:1,name:'吃饭',done:true},
            {id:2,name:'睡觉',done:true},
            {id:3,name:'打代码',done:false}
        ]}

    render(){
        const {lists} = this.state
        return (
            <div className='container'>
               <Header getData = {this.getData}></Header>
                <List content = {lists} updateData = {this.updateData} deleteData={this.deleteData}></List>
                <Footer content = {lists} checkAll = {this.checkAll} clearAllDone={this.clearAllDone}></Footer>
            </div>
        )
    }

    //添加
    getData = (data)=>{
        let {lists} = this.state
        //通过nanoid来生成唯一的字符串
        const newList = {id:nanoid(),name:data,done:false}
        this.setState({lists:[newList,...lists]})
    }

    //更新状态
    updateData = (id,checked)=>{
        let {lists} = this.state
        lists.forEach((item,index)=>{
            if(item.id === id){
                item.done = checked
            }
        })
        this.setState({lists})
    }

    //删除
    deleteData = (id)=>{
        let {lists} = this.state
        lists.forEach((item,index)=>{
            if(item.id === id){
                lists.splice(index,1)
            }
        })
        this.setState({lists})
    }

    //全选
    checkAll = (flag)=>{
        let {lists} = this.state
        lists.forEach((item,index)=>{
            if(item.done !== flag){
                item.done = flag
            }
        })
        this.setState({lists})
    }

    //清除所有已完成
    clearAllDone = ()=>{
        let {lists} = this.state
        let newList = lists.filter((item)=>{
            return item.done === false
        })
        this.setState({lists:newList})
    }
}
