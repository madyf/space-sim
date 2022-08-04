import * as THREE from 'three';
import { Vector3 } from 'three';
import { CameraController } from './cameraController';
import { Physics } from './physics';
import { PlanetGenerator } from './planetGenerator';
import { StarGenerator } from './starGenerator';

const camera = new CameraController(new Vector3(), 10, 0.1)

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
window.addEventListener("DOMContentLoaded", ()=>document.body.appendChild( renderer.domElement ))

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
const light = new THREE.AmbientLight( 0x404040 );

const system = new Physics()
const planets = PlanetGenerator(30)
system.addPlanet(planets, camera)

planets.forEach((planet)=>{
    scene.add(planet)
})

scene.background

camera.position.z = 100;

const stars = StarGenerator(6000)

scene.add(directionalLight, light, stars);

function animate() {
    requestAnimationFrame( animate );
    system.gravity()
    planets.forEach((planet)=> {
        planet.position.add(planet.velocity)
        planet.rotation.y += 0.02
    })

    camera.move()
    renderer.render( scene, camera );
};

animate();