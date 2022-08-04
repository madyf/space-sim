import { Vector3 } from "three";
import { CameraController } from "./cameraController";
import { PhysicsObject } from "./physicsObject";
import { Planet } from "./planetEntity";

export class Physics{
    private system:PhysicsObject[] = []
    constructor(){

    }

    addPlanet(planets: Planet[], camera: CameraController){
        planets.forEach(element => {
            this.system.push(element)
        });
        this.system.push(camera)
    }

    removePlanet(planet:PhysicsObject){
        const index = this.system.indexOf(planet)
        this.system.splice(index, index+1)
    }

    gravity(){
        let temp = new Vector3()
        
        this.system.forEach((planet) => {
            for(let otherPlanet of this.system){
                if(planet != otherPlanet){

                    temp.copy(planet.position)
                    const force = (planet.mass + otherPlanet.mass / ((planet.position.distanceTo(otherPlanet.position))**2)) * 0.000001

                    if(planet.position.distanceTo(otherPlanet.position) <= (planet.radius + otherPlanet.radius) * 10){
                        planet.velocity.add(temp.sub(otherPlanet.position).normalize().multiplyScalar(force))
                    }

                    planet.velocity.add(temp.sub(otherPlanet.position).normalize().multiplyScalar(-force))
                }
            }
        })
    }
}