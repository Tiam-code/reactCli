import React, {Component} from 'react';
import {NavLink,Route,Link} from 'react-router-dom'
import MyNavLink from "../MyNavLink";
import Detail from "./Detail";

class Message extends Component {
    state = {
        messages:[
            {id:"1",name:"消息1"},
            {id:"2",name:"消息2"},
            {id:"3",name:"消息3"}
        ]
    }
    render() {
        const {messages} = this.state
        return (
            <div>
                <div>
                    <ul>
                        {
                            messages.map((item) => {
                                return (
                                    <li key={item.id}>
                                        {/*1.使用restful风格的url传参*/}
                                        <Link replace to={`/home/message/detail/${item.id}/${item.name}`}>{item.name}</Link>
                                        {/*2.通过search传递参数*/}
                                        {/*<Link to={`/home/message/detail?id=${item.id}&name=${item.name}`}>{item.name}</Link>*/}
                                        {/*3.通过state传递参数*/}
                                        {/*<Link to={{pathname:'/home/message/detail',state:{id:item.id,name:item.name}}}>{item.name}</Link>*/}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/*1.接收参数,参数的名称与此处定义的一致*/}
                <Route path={"/home/message/detail/:id/:name"} component={Detail}/>
                {/*2.通过search传参无需声明接收参数，直接写正常形式即可*/}
                {/*<Route path={"/home/message/detail"} component={Detail}/>*/}
                {/*3.通过state传参无需声明接收参数，直接写正常形式即可*/}
                {/*<Route path={"/home/message/detail"} component={Detail}/>*/}
            </div>
        );
    }
}

export default Message;