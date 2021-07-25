import React, {Component} from 'react';
// import qs from 'querystring'

const contents = [
    {id:"1",content:"你好"},
    {id:"2",content:"Hello"},
    {id:"3",content:"Hi"}
]
class Detail extends Component {

    render() {
        console.log(this.props)
        //1.params方式，组件内部接收参数
        const {id,name} = this.props.match.params
        //2.search方式，组件内部接收参数,通过slice(1)取出头部的？
        // const {id,name} = qs.parse(this.props.location.search.slice(1))
        //3.state方式,加上｛｝是为了防止通过url访问该组件产生undefined的bug
        // const {id,name} = this.props.location.state || {}
        const value = contents.find((item)=>{
            return item.id === id
        }) || {}
        return (
            <ul>
                <li>id:{id}</li>
                <li>name:{name}</li>
                <li>content:{value.content}</li>
            </ul>
        );
    }
}

export default Detail;