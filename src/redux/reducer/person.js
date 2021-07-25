//初始状态是一个数组
const initState = [{id:'001',name:'祝浩',age:21}]
export default (preState = initState,action)=>{
    console.log("pre",preState)
    console.log("action",action)
    const {type,data} = action
    switch (type) {
        case "addPerson":
            preState.push(data)
            return preState
        default:
            return preState
    }
}