import { Vector3 } from "three";
import { PhysicsObject } from "./physicsObject";

export class Physics{
    private system:PhysicsObject[] = []
    constructor(){

    }

    addPlanet(...planet:PhysicsObject[]){
        planet.forEach(element => {
            this.system.push(element)
        });
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
                    const force = (planet.mass + otherPlanet.mass / ((planet.position.distanceTo(otherPlanet.position))**2)) * 0.001

                    if(planet.position.distanceTo(otherPlanet.position) <= (planet.radius + otherPlanet.radius)*2){
                        planet.velocity.add(temp.sub(otherPlanet.position).normalize().multiplyScalar(force))
                    }

                    planet.velocity.add(temp.sub(otherPlanet.position).normalize().multiplyScalar(-force))
                }
            }
        })
    }

    collision(){
        this.system.forEach((planet) => {
            for(let otherPlanet of this.system){
                if(planet.position.distanceTo(otherPlanet.position) <= planet.radius + otherPlanet.radius){
                    
                }
            }
        })
    }
}