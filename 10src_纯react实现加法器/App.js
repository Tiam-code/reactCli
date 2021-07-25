import React, {Component} from 'react';

class App extends Component {
    state = {count:0}

    add = ()=> {
        let {count} = this.state
        const selectValue = parseInt(this.selectNode.value)
        this.setState({count:count+selectValue})
    }

    decr = ()=> {
        let {count} = this.state
        const selectValue = parseInt(this.selectNode.value)
        this.setState({count:count-selectValue})
    }

    addOnlyJS = ()=> {
        let {count} = this.state
        if(count >0 && count%2 === 1){
            const selectValue = parseInt(this.selectNode.value)
            this.setState({count:count+selectValue})
        }
    }

    addAsync = ()=>{
        let {count} = this.state
        const selectValue = parseInt(this.selectNode.value)
        setTimeout(()=>{
            this.setState({count:count+selectValue})
        },500)

    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h1>当前求和为：{count}</h1>
                <select ref = {node => this.selectNode = node} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.decr}>-</button>
                <button onClick={this.addOnlyJS}>为奇数才加</button>
                <button onClick={this.addAsync}>异步加</button>
            </div>
        );
    }
}

export default App;
