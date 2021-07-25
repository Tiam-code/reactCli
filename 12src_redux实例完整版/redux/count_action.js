//该文件用于为Count组件封装action对象

export const addAction = (data) => {
    return {type:'add',data}
}
export const descAction = (data) => {
    return {type:'desc',data}
}