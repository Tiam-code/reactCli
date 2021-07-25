import React,{Component} from 'react'
import Message from "../Message";
import News from "../News";
import MyNavLink from "../MyNavLink";
import {Route,Redirect} from 'react-router-dom'

export default class Home extends Component{
    render(){
        return(
            <div>
                <h2>我是Home组件</h2>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/message">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/news">Message</MyNavLink>
                    </li>
                </ul>

                <Route path={'/home/message'} component={Message}></Route>
                <Route path={'/home/news'} component={News}></Route>
                {/*<Redirect to={'/home/message'}></Redirect>*/}
            </div>
        )
    }
}