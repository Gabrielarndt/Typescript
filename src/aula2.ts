

export function soma(a: number, b: number): number{
    return a+b;
}

export function subtrai(a: number, b: number): number{
    return a - b;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export namespace Aula2{
    export interface IPessoa{
        nome: string;
        idade: number;
        falar(): void;
    }
}

///////////calculadora///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function somar(a: number, b: number): number{
    return a + b;
}

export function subtrair(a: number, b: number): number{
    return a - b;
}

export function multiplicar(a: number, b: number): number{
    return a * b;
}

export function dividir(a: number, b: number): number{
    return a / b;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export namespace geometria{
    export class circulo{
    raio: number
    pi: number = 3.14
    constructor(raio: number){
        this.raio = raio
    }

    public area(): void{
        console.log(this.pi * this.raio^2)
    }
    }

    export class retangulo{
        altura: number
        largura: number
        constructor(altura: number, largura: number){
            this.altura = altura;
            this.largura = largura;
        }
        public area(): void{
            console.log(this.altura * this.largura)
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
