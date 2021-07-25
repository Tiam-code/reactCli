import React,{Component} from 'react'
import './index.css'

export default class Footer extends Component{
    render(){
        const {content} = this.props
        let haveDone = content.filter((item)=>{
            return item.done === true
        })
        return (
            <div className={'footContainer'}>
                <div>
                    <input type='checkbox' onChange={this.checkAll} checked={content.length === haveDone.length && content.length !== 0  ? true : false}/>
                    <label>已完成{haveDone.length}/全部{content.length}</label>
                </div>
                <button onClick={this.clearAllDone}>清除已完成任务</button>
            </div>
        )
    }
    checkAll = (event) => {
        const {checkAll} = this.props
        checkAll(event.target.checked)
    }
    clearAllDone = ()=> {
        const {clearAllDone} = this.props
        clearAllDone()
    }
}