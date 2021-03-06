// Enemies our player must avoid

var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    var anyRow = Math.floor((Math.random() * 3) + 1);
    this.x = -101;
    this.y = anyRow * 83;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    var anyNum = Math.floor((Math.random()*3)+1);
    var speed = Math.floor((Math.random()*3)+1);
    this.x += 101*anyNum*dt*speed ;
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//local variables to hold the time-delta(dt) and the canvas object passed from engine.js
var cn,dtLocal;

var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 2*101;
    this.y = 5*83;
};

//handles keyboard inputs
Player.prototype.handleInput = function (mov) {

    switch(mov) {

        case 'left':
         
            if (this.x > 0) {                
                this.x -= 101;
            }                
            
            break;

        case "right":

            if (this.x < cn.width-101) {
                this.x += 101;
            }

            break;

        case "up":
               
            if (this.y > 0) {
                this.y -= 83;
            }

            break;

        case "down":
            
            if (this.y < cn.height-166) {
                this.y += 83;
            }

            break;

        }

    };

Player.prototype.update = function (dt,canvas) {

    // no op
    cn = canvas;    
    dtLocal = dt;
    
};

Player.prototype.render = function () {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//console.log(global);
var allEnemies = [];
var numEnemies = 8;

for (var i=0; i<numEnemies; i++){

    allEnemies.push(new Enemy());
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener ('keyup', function(e) {
  
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

   player.handleInput(allowedKeys[e.keyCode]);
});