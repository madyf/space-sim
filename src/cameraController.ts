import input from "./inputHandler";
import { PerspectiveCamera, Vector3 } from "three";
import { PhysicsObject } from "./physicsObject";

export class CameraController extends PerspectiveCamera implements PhysicsObject{
    private speed = 2
    constructor(public velocity: Vector3, public radius: number, public mass: number){
        super(75, window.innerWidth / window.innerHeight, 0.1, 2000 )  
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