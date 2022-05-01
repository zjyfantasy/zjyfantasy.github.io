/**
 * 使用 web worker 有效降低主线程渲染压力，路径计算不会影响地图渲染
 */
importScripts('./fengmap.analyser.min.js')

let options = {
    appName: '蜂鸟研发SDK_2_0',
    key: '57c7f309aca507497d028a9c00207cf8',
    mapID: '1321274646113083394',
}

/**
 * 在 worker 内部读取路网数据，完成分析器的初始化工作，在 v3 版本以前，我们需要在 Map 的 loadComplete 中执行。
 * 初始化分析器完成后，向主线程发送消息，告知主线程，计算线程已完成对路网数据的初始化。
 */
var analyser = new fengmap.FMNaviAnalyser(options, () => {
    console.log('worker send:', 'ready');
    postMessage(JSON.stringify({ type: 'ready' }));
})

/**
 * 处理路径计算的方法
 * @param {*} request 外部传入的搜索条件
 */
function handleRoute(request) {
    analyser.route(request, (result) => {
        postMessage(JSON.stringify({ type: 'result', data: result }));
    });
}

/**
 * 消息监听器，当主线程向分析器线程发送消息时，进行消息的解析和处理。当收到 ‘route’ 消息时，调用路径计算方法进行搜索。
 */
onmessage = function(msg) {
    console.log('worker get:', JSON.parse(msg.data).type);
    if (JSON.parse(msg.data).type == 'route') {
        handleRoute(JSON.parse(msg.data).request);
    }
}