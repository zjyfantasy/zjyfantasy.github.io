/**
 * 根据地图的范围返回随机的坐标点
 * @param {object} bound 地图的 bound
 * @param {{x,y}} bound.min 地图的 bound
 * @param {{x,y}} bound.max 地图的 bound
 * @returns 
 */
function getRandomCoords(bound) {
    let minX = bound.min.x;
    let minY = bound.min.y;
    let maxX = bound.max.x;
    let maxY = bound.max.y;
    var _x = Math.floor(Math.random() * (maxX - minX)) + minX;
    var _y = Math.floor(Math.random() * (maxY - minY)) + minY;
    return { x: _x, y: _y }
}

var _markers = []

/**
 * 向指定的地图实例中创建任意数量的自定义覆盖物的方法
 * @param {*} map 地图实例
 * @param {*} num 要添加的标注数量
 */
function _randomDomMarker(map, num) {
    for (let index = 0; index < num; index++) {
        var domMarker = new fengmap.FMDomMarker({
            x: getRandomCoords(map.getBound()).x,
            y: getRandomCoords(map.getBound()).y,
            content: '<p class="my-popup">' + getRandomCoords(map.getBound()).x + '</p>',
            domWidth: 10,
            domHeight: 10
        });
        var level = map.getLevel()
        var floor = map.getFloor(level);
        domMarker.addTo(floor);
        _markers.push(domMarker)
    }
}

/**
 * 移除所有的模拟坐标
 */
function _clearAllDomMarker() {
    _markers.forEach(marker => {
        marker.remove();
    });
}