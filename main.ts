import { Controle } from "./controle";
import prompt from 'prompt-sync';

let control: Controle = new Controle(0,0,0);
let teclado = prompt();
let option: number = 0;


while (option !== 9){

    console.log('=============| Menu |==============');
    console.log('1. Lançar Nota                     ');
    console.log(                                     );
    console.log('9. Sair                       ✖'   );
    console.log('===================================');

    option = +teclado('Escolha uma ação : ');

    switch (option){
        case 1:
           let nota1: number = +teclado('Digite a Nota do Primeiro Semestre:  ')
           let nota2: number = +teclado('Digite a Nota do Segundo Semestre:  ')
            control.avaliacao(nota1, nota2);
            break;
            default:
                break;


      
    }

}




