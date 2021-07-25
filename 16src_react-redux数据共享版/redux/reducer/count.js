/*
   1.该文件用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
   2.该函数会接收两个参数：之前的状态previousState和动作对象action
*/

//当reducer用于初始化时，preState的值为undefined，所以reducer需要定义初始化的值
const initState = 0
//设置preState的默认值，如果未传该参数或该参数值为undefined，那么就使用默认值
export default function countReducer(preState = initState,action){
    //组件通过store.dispatch传递过来的值都会在此处被接收
    const {type,data} = action
    switch (type){
        case "add":
            return preState+data
        case "desc":
            return preState-data
        default:
            return preState
    }
}
