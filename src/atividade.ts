function calcularArea(base: number, altura: number): number {
    return base * altura
 }
 
 const base1 = 4;
 const altura1 = 5;
 
 console.log(`A área com base ${base1} e altura ${altura1} é igual:`, calcularArea(base1, altura1));
 
 
 function saudacao(nome: string): string {
     return "Olá " + nome
 }
 
 console.log(saudacao("João"));
 console.log(saudacao("Ana"));
 console.log(saudacao("Maria"));
 console.log(saudacao("José"));
 