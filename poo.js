
/*1*/ 
class Persona {
    constructor (nombre, edad, profesion) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
}


let cPersona = new Persona("Ana",25,"Ingeniera")
console.log(cPersona)

class Personaje {
    constructor (nombre, edad, profesion) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
}


let otraPersona = new Personaje("Carlos Amparo",47,"Catador")
console.log(otraPersona)

/*2*/

class Vehiculo {
    constructor (marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    arrancar(){
        return "Estoy arrancando"
    }

    detener() {
        return "Me detuve"
    }
}

let carrito = new Vehiculo ("Jeep", "Avenger" )

console.log(carrito.arrancar())
console.log(carrito.detener())

/* Profe yo se que usted dijo que la class de la hija es Coche pero yo le quise poner Cacharrito*/

class Cacharrito extends Vehiculo {
constructor(marca, modelo) {
    super(marca,modelo)
}
    acelerar() {
        return "KA-CHOW"
    }
} 
let cacharro = new Cacharrito ("Jeep", "Wrangler")

console.log(cacharro.acelerar())

/*3*/
class CuentaBancaria {
    
    constructor(numero, saldo, cliente) {

        this.numero = numero;
        this.saldo = saldo ;
        this.cliente = cliente;
    }


    consultar() {
        console.log(`Saldo actual: $${this.saldo}`);
    }
    
    depositar(valor) {
        
        if( valor < 0 ) {
            throw new Error( `*** ADVERTENCIA: Por favor deposite un monto minimo] *** ` );
        }

        this.saldo += valor;
        console.log(`*** CONSIGNACION *** \n    Se ha depositado ${valor} en la cuenta ${this.numero}. \n    Saldo actual: $${this.saldo}`);
    }
    
    retirar(valor) {
        
        if (this.saldo < valor) {
            console.log(`*** RETIRO *** \n  Saldo insuficiente en la cuenta ${this.numero}`);
        } else {
            this.saldo -= valor;
            console.log(`*** RETIRO *** \n    Se han retirado ${valor} de la cuenta ${this.numero}. \n    Saldo actual: $${this.saldo}`);
        }
    }
}

let x = new CuentaBancaria(5000);
console.log(x.depositar(2000))

/*4*/

class Figura {

    calcularArea (){

    }
}

class Circulo extends Figura {
    
        constructor(radio) {
            super();
            this.radio = radio;
    }

    calcularArea () {
        return Math.PI * this.radio ** 2;
    }

}

class Rectangulo extends Figura {
    constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
    }

    calcularArea() {
      return this.base * this.altura;
    }
}

const circulo = new Circulo(5); // Un círculo con radio 5
const rectangulo = new Rectangulo(4, 6); // Un rectángulo con base 4 y altura 6

const areaCirculo = circulo.calcularArea();
const areaRectangulo = rectangulo.calcularArea();

console.log(`El área del círculo es: ${areaCirculo}`);
console.log(`El área del rectángulo es: ${areaRectangulo}`);

/*5*/

class Direccion{
    constructor (calle, ciudad, codigoPostal) {
        this.calle = calle;
        this.cuidad = ciudad;
        this.codigoPostal = codigoPostal;
    }  
}

class Personita {
    constructor (nombre, direccion){

    }
}

const direccionPersona1 = new Direccion("Calle 53B", "Bogota", "12345");
const persona1 = new Personita("Juan", 30, direccionPersona1);

console.log(persona1)
console.log(direccionPersona1)


/*6*/
class SaldoInsuficienteError extends Error {
    constructor(saldo, cantidad) {
    super(`Saldo insuficiente para retirar ${cantidad}. Saldo actual: ${saldo}`);
    this.name = 'SaldoInsuficienteError';
    }
}

class CuenticaBancaria {
    constructor(saldoInicial) {
    this.saldo = saldoInicial || 0;
    }

    depositar(cantidad) {
    if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se ha depositado ${cantidad}. Saldo actual: ${this.saldo}`);
    } else {
        console.log('La cantidad a depositar debe ser mayor que cero.');
    }
    }

    retirar(cantidad) {
    if (cantidad > 0) {
        if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se ha retirado ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
        throw new SaldoInsuficienteError(this.saldo, cantidad);
        }
    } else {
        console.log('La cantidad a retirar debe ser mayor que cero.');
    }
    }
}

  const cuenta = new CuenticaBancaria(1000); // Crear una cuenta con saldo inicial de 1000 
  cuenta.depositar(500); // Depositar 500 
try {
    cuenta.retirar(200);  // Retirar 200
    cuenta.retirar(10000); // Intentar retirar más de lo que hay en la cuenta (lanzará una excepción)
} catch (error) {
    if (error instanceof SaldoInsuficienteError) {
    console.error(error.message);
    } else {
    console.error('Ocurrió un error inesperado:', error.message);
    }
}

/*7*/ 
class Animal {
    constructor(){}
    hablar(){

    }
}

class Perro extends Animal {
    constructor(){
    super()}
    hablar(){
    return "perrito encerrado, guau guau guau"
    }
}

class Gato extends Animal {
    constructor(){
    super()}
    hablar(){
        return "soy un gato, MIUAU MIAUUU"
        }
}
const miPerro = new Perro();
console.log(miPerro.hablar()); 

const miGato = new Gato();
console.log(miGato.hablar()); 