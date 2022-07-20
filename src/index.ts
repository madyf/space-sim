import * as THREE from 'three';
import { CameraController } from './cameraController';

const cam = new CameraController()


const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
window.addEventListener("DOMContentLoaded", ()=>document.body.appendChild( renderer.domElement ))

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

cam.position.z = 10;

function animate() {
    requestAnimationFrame( animate );
    cam.move()
    renderer.render( scene, cam );
};

animate();