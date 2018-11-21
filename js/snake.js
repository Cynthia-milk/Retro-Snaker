 // 蛇
 ((function (win) {
    var elements = []; // 存储小蛇的每个身体部分
    // 小蛇的构造函数
    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        // 小蛇的身体
        this.body = [{
                x: 3,
                y: 2,
                color: 'red'
            }, // 头
            {
                x: 2,
                y: 2,
                color: 'orange'
            }, //身体
            {
                x: 1,
                y: 2,
                color: 'yellow'
            }, // 身体
        ];
        // 方向
        this.direction = direction || 'right'
    }
    Snake.prototype.init = function (map) {
        // 先删除之前的小蛇
        remove()
        // 循环创建div
        for (let i = 0; i < this.body.length; i++) {
            // 创建div
            let div = document.createElement('div');
            // 把div添加到地图中去
            map.appendChild(div);

            let obj = this.body[i];
            div.style.position = 'absolute';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            // 横纵坐标
            div.style.left = obj.x * this.width + 'px';
            div.style.top = obj.y * this.height + 'px';
            // 背景颜色
            div.style.backgroundColor = obj.color;

            elements.push(div);

        }

    }
    // 小蛇动的行为
    Snake.prototype.move = function (food, map) {
        // 删除小蛇的

        // 改变小蛇的身体的坐标位置
        let i = this.body.length - 1; // 2
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        // 判断方向---改变小蛇的头的坐标
        switch (this.direction) {
            case 'right':
                this.body[0].x += 1;
                break;
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'top':
                this.body[0].y-= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
        }
        // 判断小蛇有没有吃到食物
        // 小蛇头的坐标===食物的坐标
        let headX = this.body[0].x * this.width;
        let headY = this.body[0].y * this.height;

        if (headX == food.x && headY == food.y) {
            // 获取小蛇的尾巴
            let last = this.body[this.body.length - 1];
            // 把最后的蛇尾复制一个,重新的加到小蛇的body中
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            })
            console.log(last.color)
            food.init(map);
        }



    }

    function remove() {
        let i = elements.length - 1;
        for (; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1)
        }

    }
    win.Snake = Snake;
})(window));
