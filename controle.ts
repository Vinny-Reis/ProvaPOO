export class Controle{

    constructor(

        private _nota1: number,
        private _nota2: number,
        private _media: number

        ) {}
    
        public get nota1(): number {
            return this._nota1;
        }
    
        public set nota1(nota1: number) {
            this._nota1 = nota1;
        }


        public get nota2(): number {
            return this._nota2;
        }
    
        public set nota2(nota2: number) {
            this._nota2 = nota2;
        }
       
        public get media(): number {
            return this._media;
        }

        public set media(media: number) {
            this._media = media;
        }
      
        
        
        avaliacao(nota1: number, nota2: number): void{
            this.media = (nota1 + nota2)/2;
            if(this.media >= 60){
                console.log('Aprovado!')
            }
             if (this.media <= 59.9)
                 console.log('Reprovado!')
             
             console.log('Media do Aluno: ' +  this.media);
        }

      


}