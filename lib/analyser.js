/**
 * 自定义实现的 NaviAnalyer 对象
 * @param {function} cb 分析器 ready 状态的后回调
 */
var NaviAnalyser = function(cb) {
    this.worker = new Worker('./lib/worker.js');
    this.workerready = false;

    this.worker.postMessage(JSON.stringify({
        type: 'init'
    }));
    console.log('sender send:', 'init');
    this.worker.onmessage = (msg) => {
        console.log('sender get:', JSON.parse(msg.data).type);
        if (JSON.parse(msg.data).type == 'ready') {
            this.workerready = true;
            cb && cb();
        }
    }

    /**
     * 实现的路径计算方法，这个分析器，只是用于向 FManalyser 发送数据调用的 ‘外壳’。
     * @param {object} request 搜索条件
     * @param {function} success 路径计算成功的回调函数
     * @param {function} failed 路径计算失败的回调函数
     */
    this.route = function(request, success, failed) {
        if (this.workerready) {
            console.log('sender send:', 'route');
            this.worker.postMessage(JSON.stringify({
                type: 'route',
                request: request
            }));
            this.worker.onmessage = (msg) => {
                console.log('sender get:', JSON.parse(msg.data).type);
                if (JSON.parse(msg.data).type == 'result') {
                    success && success(JSON.parse(msg.data).data);
                } else {
                    console.log('noresult');
                    failed && failed()
                }
            }
        } else {
            console.log('notready');
            failed && failed();
        }
    };

    /**
     * 实现的路网约束的方法，可以直接调用内部的分析器进行计算，这里并没有实现，开发可以根据 route 方法的实现逻辑自己实现。
     * @param {{x,y}} coords 
     * @returns 
     */
    this.pathConstraint = (coords) => {
        return coords
    };
}