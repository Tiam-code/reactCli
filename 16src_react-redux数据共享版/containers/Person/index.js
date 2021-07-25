import React, {Component} from 'react';
import {connect} from "react-redux";
import {nanoid} from "nanoid"
import {addPersonAction} from "../../redux/action/person";

class Person extends Component {
    add = ()=>{
        const name = this.nameInputNode.value
        const age = this.ageInputNode.value
        const id = nanoid()
        const {add} = this.props
        add({id,name,age})
    }
    render() {
        const {personArr,count} = this.props.state
        return (
            <div>
                <input ref={(node) =>{this.nameInputNode = node}} type="text" placeholder={'请输入姓名'}/>
                <input ref={(node) =>{this.ageInputNode = node}} type="text" placeholder={'请输入年龄'}/>
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        personArr.map((item,index)=>{
                            return <li key={item.id}>姓名：{item.name}，年龄：{item.age}</li>
                        })
                    }
                </ul>
                <h3>上方组件的求和为:{count}</h3>
            </div>
        );
    }
}
const PersonContainer = connect(
    state => {
        return {state}
    },
    {add:addPersonAction}
    )(Person)

export default PersonContainer;