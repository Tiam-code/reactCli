// 这里的语法不是es6语法
const proxy = require('http-proxy-middleware')

module.exports = function (app){
    app.use(
        proxy('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        })
    )
}