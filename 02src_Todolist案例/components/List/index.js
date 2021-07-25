import React,{Component} from 'react'
import PropTypes from "prop-types"
import Item from '../Item'
import './index.css'


export default class List extends Component{

    //对接受到的props进行类型、必要性限制
    static propTypes = {
        content:PropTypes.array.isRequired,
        updateData:PropTypes.func.isRequired
    }

    render(){
        const {content,updateData,deleteData} = this.props
        return (
            <div className={'listContainer'}>
                {
                    content.map((item,index)=>{
                        return <Item key={item.id} todo={item} updateData={updateData} deleteData={deleteData}/>
                    })
                }
            </div>
        )
    }
}