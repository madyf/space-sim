import * as THREE from 'three';
import { Vector3 } from 'three';
import { PhysicsObject } from './physicsObject';

export class Planet extends THREE.Mesh implements PhysicsObject{
    public velocity: Vector3 = new Vector3()
    constructor(public mass: number, public radius: number){
        super(new THREE.SphereGeometry(radius),new THREE.MeshPhongMaterial({ color:Math.floor(Math.random()*0xFFFFFF)}))
    }
}