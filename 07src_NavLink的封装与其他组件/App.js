import React,{Component} from 'react'
import {Route,Switch,Redirect} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import MyNavLink from "./components/MyNavLink";


export default class App extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*路由链接*/}
                            {/*<Link className="list-group-item " to={"/about"}>About</Link>*/}
                            {/*<Link className="list-group-item " to={"/home"}>Home</Link>*/}

                            {/*<NavLink activeClassName="clicked" className="list-group-item " to={"/about"}>About</NavLink>*/}
                            {/*<NavLink activeClassName="clicked" className="list-group-item " to={"/home"}>Home</NavLink>*/}

                            <MyNavLink to='/about'>About</MyNavLink>
                            <MyNavLink to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Switch>
                                    <Route exact={true} path={"/about"} component={About}></Route>
                                    <Route exact path={"/home"} component={Home}></Route>
                                    <Redirect to={"/home"}></Redirect>
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}