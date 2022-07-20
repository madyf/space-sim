import input from "./inputHandler";
import { PerspectiveCamera } from "three";

export class CameraController extends PerspectiveCamera{
    private speed = 0.2
    constructor(){
        super(75, window.innerWidth / window.innerHeight, 0.1, 1000 )  
    }

    move(){

        if(input.isKeyPressed('w')) {
            this.translateZ(-this.speed);
        }
        if(input.isKeyPressed('s')){
            this.translateZ(this.speed);
        }
        
        if(input.isKeyPressed('d')){
            this.translateX(this.speed);
        }
        if(input.isKeyPressed('a')){
            this.translateX(-this.speed);
        }
        if(input.isKeyPressed('ArrowRight')){
            this.rotateY(-0.02)
        }
        if(input.isKeyPressed('ArrowLeft')){
            this.rotateY(0.02)
        }
    }

}