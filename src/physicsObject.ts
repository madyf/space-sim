import { Vector3 } from "three";

export class PhysicsObject{
    constructor(public velocity: Vector3, public mass: number, public radius: number, public position: Vector3){
    }
}