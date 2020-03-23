import env from '@/constants/env'
import { loadFiles } from '@/assets/utils/tools'
const userOptions = require('@/assets/utils/merge')

window.opts = userOptions
console.log(window.opts)

if (env === 'dev') {
    require('./assets/dev/blog-common.min.css')
    // Todo: add other cnblog files
} else {
    let theme = userOptions.theme.name
    console.log('你正在使用:', theme)
    if(theme === 'acg' || theme === 'light') {
        theme = 'reacg'
    }
    loadFiles([
        {
            name: `${theme}`,
            type: 'js',
        },
    ])
}


// # 常见问题

// 1. 生产环境 博客园运行报错
// ---------------------------
// [WDS] Disconnected!
// close @ client:172
// eval @ socket.js:26
// EventTarget.dispatchEvent @ sockjs.js:170
// eval @ sockjs.js:970
// setTimeout(异步)
// SockJS._close @ sockjs.js:958
// SockJS._transportClose @ sockjs.js:917
// g @ sockjs.js:66
// EventEmitter.emit @ sockjs.js:86
// WebSocketTransport.ws.onclose @ sockjs.js:2976
// VM6125 sockjs.js:1606 GET http://127.0.0.1:8080/sockjs-node/info?t=1584905472090 net::ERR_CONNECTION_REFUSED

// 解决
// 1.
// node_modules/sockjs-client/dist/sockjs.js 代码的1605行注释
// // self.xhr.send(payload);
// 可在代码开发完成后关闭，会同步关闭热加载

// 2.
// 127.0.0.1 -> localhost