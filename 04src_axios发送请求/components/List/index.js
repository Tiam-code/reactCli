import React,{Component} from 'react'
import './index.css'

export default class List extends Component{

    render(){
        return (
            <div className={'listContainer'}>
                <div className={'imageDiv'}>
                    <img alt={'headPhoto'} src={'/img.png'}/>
                    <span>react.js</span>
                </div>
                <div className={'imageDiv'}>
                    <img alt={'headPhoto'} src={'./img.png'}/>
                    <span>react.js</span>
                </div>
                <div className={'imageDiv'}>
                    <img alt={'headPhoto'} src={'./img.png'}/>
                    <span>react.js</span>
                </div>
                <div className={'imageDiv'}>
                    <img alt={'headPhoto'} src={'./img.png'}/>
                    <span>react.js</span>
                </div>
                <div className={'imageDiv'}>
                    <img alt={'headPhoto'} src={'./img.png'}/>
                    <span>react.js</span>
                </div>
            </div>

        )
    }
}