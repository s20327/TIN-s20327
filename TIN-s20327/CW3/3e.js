function getLongestWord(string) {
    const stringSplitted = string.split(' ');
    let longestWord = '';

    for(let i = 0; i < stringSplitted.length; i++){
        if(stringSplitted[i].length > longestWord.length){
            longestWord = stringSplitted[i];
        }
    }
    return longestWord;
}

console.log(getLongestWord("Lewis Hamilton. 8śmio krotny mistrz świata!"));