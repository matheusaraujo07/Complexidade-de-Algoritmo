
const lista = [5, 10, 1, 2, 9, 8, 7, 6, 3]

console.time(ordenacaoInsercao)
function ordenacaoInsercao(vetor)
{
    let n = vetor.length;
    for (let i=1; i<n; ++i)
    {
        let key = vetor[i];
        let j = i-1;

        //Move os elementos do vetor que são maiores que a chave para uma posição a frente 
        while (j>=0 && vetor[j] > key)
        {
            vetor[j+1] = vetor[j];
            j = j-1;
        }
        vetor[j+1] = key;
    }

    console.log(vetor);
}
console.timeEnd(ordenacaoInsercao)

ordenacaoInsercao(lista)