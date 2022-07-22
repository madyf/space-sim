import * as THREE from 'three';
import { Vector3 } from 'three';
import { CameraController } from './cameraController';
import { Physics } from './physics';
import { Planet } from './planetEntity';

const camera = new CameraController(new Vector3(), 5, 0.9)


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
window.addEventListener("DOMContentLoaded", ()=>document.body.appendChild( renderer.domElement ))

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
const light = new THREE.AmbientLight( 0x404040 );
const planet1 = new Planet(0.10, 5)
const planet2 = new Planet(0.4, 2)
const planet3 = new Planet(0.2, 3)

const system = new Physics()
system.addPlanet(planet1, planet2, planet3, camera)

planet2.position.setX(3)
planet2.position.setZ(43)
planet2.position.setY(32)

planet2.position.setX(15)
planet2.position.setZ(30)
planet2.position.setY(4)


planet3.position.setX(25)
planet3.position.setZ(2)
planet3.position.setY(27)


scene.add( planet1, directionalLight, light ,planet2, planet3);

camera.position.z = 10;

function animate() {
    requestAnimationFrame( animate );
    system.gravity()

    planet1.position.add(planet1.velocity)
    planet2.position.add(planet2.velocity)
    planet3.position.add(planet3.velocity)

    camera.move()
    renderer.render( scene, camera );
};

animate();