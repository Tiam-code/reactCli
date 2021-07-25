import React,{Component} from 'react'
import Axios from 'axios'
import PubSub from 'pubsub-js'
import './index.css'

export default class Header extends Component{

    render(){
        return (
            <div className={'headContainer'}>
                <div className={'content'}>
                    <span>Search Github Users</span>
                    <div className={'search'}>
                        <input ref={(node)=>{this.myInput = node}} placeholder={'enter the name you search'}/>
                        <button onClick={this.search}>Search</button>
                    </div>
                </div>

            </div>
        )
    }

    search = ()=>{
        Axios.get('http://localhost:3000/api1/search/users',{params:{q:this.myInput.value}}).then((res)=>{
            console.log(res.data)
            const data = {users: res.data.items}
            //发布消息
            PubSub.publish('data',data)
        },(error)=>{
            console.log(error)
        })
    }
}