// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
//let n = 9//parseInt(gets());

do{
    let n = parseInt(prompt('entre com valor')) //parseInt(gets())

    if(n==-1){
        console.log(n);
        break;
    }
    else if(n==0){
        console.log(n);
     }
     else{
        console.log(--n);
     }
}
while(true);