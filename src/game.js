
import Paddle from '/src/paddle';
import InputHandler from '/src/input';
import Ball from '/src/ball';


export default class Game {
    constructor(gameWidth, gameHeight){

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start(){
        this.paddle = new Paddle(this); 

        this.ball = new Ball(this);
        
        this.gameObjects = [this.ball, this.paddle];
        new InputHandler(this.paddle);
    }

    update(deltaTime){
 
        this.gameObjects.forEach( (obj) => {
            obj.update(deltaTime)
        })
    }

    draw(ctx){
        this.gameObjects.forEach( (obj) => {
            obj.draw(ctx);
        })
    }

}