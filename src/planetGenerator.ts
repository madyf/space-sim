import { Planet } from './planetEntity';

export function PlanetGenerator(entityNumber: number): Planet[]{
    const planets: Planet[] = []

    for(let i = 0; i < entityNumber; i++){
        planets.push(new Planet(Math.random(), (Math.random() * (50 - 5) + 5)))
        planets[i]!.position.set(
            (Math.random() * 3000) - 1500,
            (Math.random() * 500) - 250,
            (Math.random() * 3000) - 1500
        )
    }
    return planets
}