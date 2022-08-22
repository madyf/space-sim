import * as THREE from 'three';
import { Vector3 } from 'three';
import { PhysicsObject } from './physicsObject';
import { RandomizeTextures } from './textureRandomizer';

export class Planet extends THREE.Mesh implements PhysicsObject{
    public velocity: Vector3 = new Vector3()
    constructor(public mass: number, public radius: number){
        const texture = RandomizeTextures()
        texture.encoding = THREE.sRGBEncoding
        texture.flipY = false

        super(new THREE.SphereGeometry(radius),new THREE.MeshPhongMaterial({ map: texture, color:0xFFFFFF}))
    }
}