import React,{Component} from 'react'
import Axios from 'axios'

export default class App extends Component{

    getStudentData = ()=>{
        Axios.get('http://localhost:3000/api1/students').then((res)=>{
            console.log('请求成功',res.data)
        },(error)=>{
            console.log('请求失败',error)
        })
    }

    getCarData = ()=>{
        Axios.get('http://localhost:3000/api2/cars').then((res)=>{
            console.log('请求成功',res.data)
        },(error)=>{
            console.log('请求失败',error)
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.getStudentData}>获取学生数据</button>
                <button onClick={this.getCarData}>获取车辆数据</button>
            </div>
        )
    }
}