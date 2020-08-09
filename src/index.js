
// ctx.fillStyle = '#f00';

// //make sure to clear previous drawing always. 
// ctx.fillRect(20, 20, 100, 100); 

// ctx.fillStyle = "blue"
// ctx.fillRect(400, 200, 50, 50);

import Game from '/src/game';

let canvas = document.getElementById('gameScreen');

//context allows to let draw in canvas
let ctx = canvas.getContext('2d');



const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

game.start();


ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);


let lastTime = 0;

//images




function gameloop(timestamp){

    let deltaTime = timestamp - lastTime;

    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    // paddle.update(deltaTime);
    // paddle.draw(ctx);
    // ball.update(deltaTime)
    // ball.draw(ctx);

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);




