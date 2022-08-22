import { Texture, TextureLoader } from "three"

export function RandomizeTextures(): Texture{
    const fileNames = []
    const loadedTextures:Texture[] = []
    for(let i = 1; i < 21; i++){
        fileNames.push(`${i}`)
    }
    fileNames.forEach((texture) =>{
        loadedTextures.push(new TextureLoader().load(`src/textures/${texture}.jpg`))
    })
    return loadedTextures[Math.floor(Math.random()*loadedTextures.length)]!
}