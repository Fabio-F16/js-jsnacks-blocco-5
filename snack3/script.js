console.log('js ok');


// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const userWord = prompt('Inserisci una parola');

const parolaRovesciata = reverseWord(userWord);
console.log(parolaRovesciata);





// funzioni---------------------------------------------------------------------------
/**
 * Given a string, return a new string with the same letters in reverse order
 * @param word - the word to be reversed
 * @returns Nothing is being returned.
 */
function reverseWord(word) {
    let parolaRovesciata = '';
    for (let i = word.length - 1; i >= 0; i--) {
        parolaRovesciata += word[i];
    }
    return parolaRovesciata;
}





