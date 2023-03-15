/*02 busca binaria (O(logn))*/
console.time(buscaBinaria)
function buscaBinaria(umVetor, item) {
    let prim = 0;
    let ult = umVetor.length - 1;
    let achou = false;

    while (prim <= ult && !achou) {
        meioLista = Math.ceil((prim + ult) / 2);
        if (umVetor[meioLista] == item) {
            achou = true;
        }
        else {
            if (item < umVetor[meioLista]) {
                ult = meioLista - 1;
            }
            else {
                prim = meioLista + 1;
            }
        }
    }
    return achou;
}
console.timeEnd(buscaBinaria)