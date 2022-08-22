import * as THREE from 'three';
import { TextureLoader, Vector3 } from 'three';
import { PhysicsObject } from './physicsObject';

export class Planet extends THREE.Mesh implements PhysicsObject{
    public velocity: Vector3 = new Vector3()
    constructor(public mass: number, public radius: number){
        const texture = new TextureLoader().load(`src/textures/${Math.floor(Math.random()*(20-1+1)+1)}.jpg`)
        texture.encoding = THREE.sRGBEncoding
        texture.flipY = false

        super(new THREE.SphereGeometry(radius),new THREE.MeshPhongMaterial({ map: texture, color:0xFFFFFF}))
    }
}