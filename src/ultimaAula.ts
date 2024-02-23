// Jogo da forca

let palavras: string[] = ["porshe", "mclaren", "lamborguini", "ferrari", "mercedez", "audi", "bmw", "toyota"];
let errou: number = 0;
let palavraCompleta: number = 0;
let indice = Math.floor(Math.random() * palavras.length)
let palavra = palavras[indice];
let letra = "";
let letras: any = [""];

class forca {
    letra: string;

    constructor(letra: string) {
        this.letra = letra
    }

    achar() {
        let acertou: boolean = false
        let achei: any;

        console.log(this.letra)
        if (this.letra.length > 1) {
            alert("Coloque Apenas uma letra");
        }
        else {
            let confere = true;
            let ind = 0;
            while (ind < letras.length) {
                if (this.letra == letras[ind]) {
                    alert("A letra " + this.letra.toUpperCase() + " já foi digiada")
                    confere = false
                    acertou = true;
                    break;
                }
                ind++
            } 
            if (confere) {
                letras = letras + this.letra;
                for (var i: number = 0; i < palavra.length; i++) {
                    if (this.letra == palavra[i]) {
                        if (palavraCompleta == palavra.length - 1) {
                            console.log(`Existe a letra "${this.letra}" na posição ${i}"`);
                            console.log("Parabéns você sobreviveu! Dessa vez...")
                            console.log(`A palavra era ${palavra}`)
                            acertou = true;
                            palavraCompleta ++
                            break;
                        } else {
                            console.log(`Existe a letra "${this.letra}" na posição ${i}"`);
                            palavraCompleta ++
                            acertou = true;
                            break;
                        }
                    }
                }
            }
            if (!acertou) {
                console.log(`A letra ${this.letra} não existe`);
                errou ++
                if (errou == 3) {
                    alert("Você perdeu")
                }
            }
            return achei
        }
    }
}
while (errou != 3 && palavraCompleta != palavra.length) {
    let letra: string = prompt("Digite uma letra")!
    const jogo = new forca(letra)
    jogo.achar();
}