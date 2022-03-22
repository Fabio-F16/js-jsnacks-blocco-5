console.log('js ok')

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine = [

    {
        tipo: 'romanesco',
        weight: 5,
        length: 10
    },
    {
        tipo: 'fiorentino',
        weight: 10,
        length: 20
    },
    {
        tipo: 'nera',
        weight: 5,
        length: 10
    },
    {
        tipo: 'napoletana',
        weight: 10,
        length: 20
    },
    {
        tipo: 'tonda',
        weight: 5,
        length: 10
    },
    {
        tipo: 'trombetta',
        weight: 10,
        length: 20
    },
    {
        tipo: 'gialla',
        weight: 5,
        length: 10
    },
    {
        tipo: 'rugoso friulano',
        weight: 10,
        length: 20
    },
    {
        tipo: 'crookneck',
        weight: 5,
        length: 10
    },
    {
        tipo: 'araba',
        weight: 10,
        length: 20
    }
]


const zucchineShort = [];
const zucchineLong = [];

typeOfZucchine(zucchine, zucchineShort, zucchineLong);

console.log(zucchineShort);
console.log(zucchineLong);


const zucchineLunghe = zucchineWeight(zucchineLong);
console.log('peso delle zucchine lunghe: ' + zucchineLunghe);

const zucchineCorte = zucchineWeight(zucchineShort);
console.log('peso delle zucchine corte: ' + zucchineCorte);






// funzioni--------------------------------------------------------------------------------------------------


/**
 * Given an array of strings, return two arrays, one containing the short strings and one containing
 * the long strings
 * @param array - the array that you want to sort
 * @param short - an array to push the short strings into
 * @param long - an empty array that will contain all the strings that are longer than 15 characters.
 */
function typeOfZucchine(array, short, long) {

    for (let i = 0; i < array.length; i++) {
        if (array[i].length < 15) {

            short.push(array[i]);

        } else {

            long.push(array[i]);

        }
    }
}


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