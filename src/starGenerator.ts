import * as THREE from 'three';

export function StarGenerator(entityNumber: number){
    const points = []

    for(let i = 0; i < entityNumber; i++){
        points.push(new THREE.Vector3(Math.random() * 3000 - 1500,Math.random() * 3000 - 1500,Math.random() * 3000 - 1500))

    }
    const starGeo = new THREE.BufferGeometry().setFromPoints(points)

    let sprite = new THREE.TextureLoader().load('./src/stars.png');

    let starMaterial = new THREE.PointsMaterial({
        size: 8,
        map: sprite,
        transparent:true,
    })
    
    const stars = new THREE.Points(starGeo, starMaterial)
    return stars;

}