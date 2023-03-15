/*03)  complexidade O(n)*/
console.time(buscaSequencial)
function buscaSequencial(umVetor, item){
    let pos = 0;
    let achou = false;

    while(pos < umVetor.length && !achou){
        if (umVetor[pos] === item){
            achou = true;
        }
        else{
            pos = pos+1;
        }
    }

    return achou;
}
console.timeEnd(buscaSequencial)