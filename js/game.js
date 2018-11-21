((function (win) {
    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.init = function () {
        // 初始化游戏
        this.food.init(this.map);
        this.snake.init(this.map);

        // 调用自动移动的小蛇的方法
        this.autoRun(this.food, this.map);
        // 调用按键的方法
        this.bindKey();
    }
    // 设置小蛇自动跑起来
    Game.prototype.autoRun = function (food, map) {
     
        let timer = setInterval(function () {
            this.snake.move(food, map);
            this.snake.init(map);
            // 横坐标的最大值
            let maxX = map.offsetWidth / this.snake.width;
            // 纵坐标的最大值
            let maxY = map.offsetHeight / this.snake.height;
            // 小蛇的头坐标
            let headX = this.snake.body[0].x;
            let headY = this.snake.body[0].y;
            // 横坐标
            if (headX < 0 || headX >= maxX) {
                clearInterval(timer);
                alert('游戏结束')
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timer);
                alert('游戏结束')
            }
        }.bind(that), 300)
    }
    // 设置用户按键,改变小蛇移动的方向
    Game.prototype.bindKey = function () {

        document.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'top';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        }.bind(that), false)
    }
    win.Game = Game;
})(window));
