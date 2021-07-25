// 这里的语法不是es6语法
const proxy = require('http-proxy-middleware')

module.exports = function (app){
    app.use(
        proxy('/api1',{//只要遇见有/api1前缀的请求，就会触发该代理配置
            target:'http://localhost:5000',//服务器地址，代理要将请求转发给谁
            changeOrigin:true,/*控制服务器收到的请求中Host的值，默认为false。
                               如果为true，服务器收到的Host与其相同的地址，这样可以避免服务器做一些访问端口的限制
                               如果为false，服务器收导的Host就是源主机地址
                                */
            pathRewrite:{'^/api1':''}//路径重写，通过/api来判断请求是否触发代理，经路径重写后，向后端请求的地址中就不包含/api了
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}