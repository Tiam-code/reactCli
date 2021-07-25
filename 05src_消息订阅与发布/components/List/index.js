import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component{
    state = {users:[]}

    //订阅消息
    componentDidMount() {
        //token唯一的订阅标识，用于取消订阅时使用
        this.token = PubSub.subscribe('data',(name,data)=>{
            //直接修改状态
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render(){
        const {users} = this.state
        return (
            <div className={'listContainer'}>
                {
                    users.map((item,index)=>{
                        return (
                            <div key={item.id} className={'imageDiv'}>
                                <img alt={'headPhoto'} src={item.avatar_url}/>
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }

            </div>
        )

    }
}