// 创建食物小方块
((function (win) {
    let elements = []; //  用来保存每个小方块食物
    function Food(x, y, width, height, color) {
        // 横纵坐标
        this.x = x || 0;
        this.y = y || 0;
        // 宽高
        this.width = width || 20;
        this.height = height || 20;
        // 背景颜色
        this.color = color || 'yellow';
    }
    // 初始化食物
    Food.prototype.init = function (map) {
        remove();
        // 创建div
        let div = document.createElement('div');
        // 把div添加到地图上
        map.appendChild(div);
        // 设置div的样式
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.position = 'absolute';
        div.style.background = this.color;
        // 随机坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        // 把div加入到数组element中
        elements.push(div);
    }
    // 私有函数---删除食物的
    function remove() {
        for (let i = 0; i < elements.length; i++) {
            let ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }
    win.Food = Food;
})(window));
