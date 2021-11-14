/*
Crea una función constructora llamada Auto que no reciba ningún argumento pero inicializa una 
propiedad llamada velocidad en 0.
Agrega dos métodos al prototipo de la función constructora:
acelerar: recibe un número como argumento e incrementa la propiedad velocidad de acuerdo al número.
frenar: recibe un número como argumento y decrementa la propiedad velocidad de acuerdo al número. 
Sin embargo, si la velocidad terminara siendo negativa debe quedar en 0.
*/

function Auto() {
    this.velocidad = 0
    this.acelerar = (num) => {
        this.velocidad = this.velocidad + num
    }
    this.frenar = (num) => {
        let vel = this.velocidad - num
        if (vel<0){
            this.velocidad = 0
        } else{
            this.velocidad = vel
        }
    }
}

const a1 = new Auto();
a1.velocidad; 

a1.acelerar(1);
a1.acelerar(2);
a1.velocidad;

a1.frenar(2);
a1.velocidad;

a1.frenar(3);
a1.velocidad; 

console.log(a1.velocidad)
