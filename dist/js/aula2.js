export function soma(a, b) {
    return a + b;
}
export function subtrai(a, b) {
    return a - b;
}
///////////calculadora///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function somar(a, b) {
    return a + b;
}
export function subtrair(a, b) {
    return a - b;
}
export function multiplicar(a, b) {
    return a * b;
}
export function dividir(a, b) {
    return a / b;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export var geometria;
(function (geometria) {
    class circulo {
        constructor(raio) {
            this.pi = 3.14;
            this.raio = raio;
        }
        area() {
            console.log(this.pi * this.raio ^ 2);
        }
    }
    geometria.circulo = circulo;
    class retangulo {
        constructor(altura, largura) {
            this.altura = altura;
            this.largura = largura;
        }
        area() {
            console.log(this.altura * this.largura);
        }
    }
    geometria.retangulo = retangulo;
})(geometria || (geometria = {}));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
