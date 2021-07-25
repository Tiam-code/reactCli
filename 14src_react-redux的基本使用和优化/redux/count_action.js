//该文件用于为Count组件封装action对象

export const addAction = (data) => {
    return {type:'add',data}
}

export const descAction = (data) => {
    return {type:'desc',data}
}

//异步action指定函数的返回值为函数,并且异步Action中一般都会调同步Action
/*执行流程如下：
   1.组件调用dispatch，将函数交给store
   2.store会执行该函数，并重新调用dispatch传递同步action
   3.store接收同步action，将其交给reducer执行
*/
export const addAsyncAction =  (data,time) =>{
    //store在执行时会默认将dispatch作为参数传进去
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addAction(data))
        },time)

    }

}
