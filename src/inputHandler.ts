class InputHandler{
    private inputs:Record<string,boolean> = {}
    constructor(){  
        document.addEventListener('keydown', (e)=>{
            this.inputs[e.key] = true;
        })  
        document.addEventListener('keyup', (e)=>{
            this.inputs[e.key] = false;
        })  
    }

    isKeyPressed(key:string):boolean{
        return Boolean(this.inputs[key])
    }
}

const input = new InputHandler()
export default input;