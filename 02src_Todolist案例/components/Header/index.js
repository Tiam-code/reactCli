import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component{

    //对接受到的props进行类型、必要性限制
    static propTypes = {
        getData:PropTypes.func.isRequired
    }

    render(){
        return (
            <div className='inputContainer'>
                <input type="text" placeholder='请输入你的任务名称，按回车确认' className='myInput' onKeyDown={this.myEnter}/>
            </div>
        )
    }
    myEnter = (event)=>{
        const {getData} = this.props
        if(event.keyCode !== 13) return
        if(event.target.value.trim() === ''){
            alert('输入内容不能为空')
            return
        }
        //此处实现子组件给父组件传值
        getData(event.target.value)
        event.target.value = ''
    }
}