console.log('js ok')

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. 
// Calcola quanto pesano tutte le zucchine.



const zucchine = [

    {
        tipo: 'romanesco',
        weight: 5,
        length: 1
    },
    {
        tipo: 'fiorentino',
        weight: 5,
        length: 2
    },
    {
        tipo: 'nera',
        weight: 5,
        length: 3
    },
    {
        tipo: 'napoletana',
        weight: 5,
        length: 4
    },
    {
        tipo: 'tonda',
        weight: 5,
        length: 5
    },
    {
        tipo: 'trombetta',
        weight: 5,
        length: 6
    },
    {
        tipo: 'gialla',
        weight: 5,
        length: 7
    },
    {
        tipo: 'rugoso friulano',
        weight: 5,
        length: 8
    },
    {
        tipo: 'crookneck',
        weight: 5,
        length: 9
    },
    {
        tipo: 'araba',
        weight: 5,
        length: 10
    }
]


const totalZucchineWeight = zucchineWeight(zucchine);

console.log(totalZucchineWeight);

// funzioni ---------------------------------------------------------------------------------

/**
 * Given an array of objects, return the sum of the weights of those objects
 * @param array - an array of objects with a weight property
 * @returns The sum of all the weights in the array.
 */
function zucchineWeight(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].weight;
    }
    return sum;
}




