const echo = (word) => {
    return word;
}

const shout = (word) => {
    return word.toUpperCase();
}

const repeat = (word, num) => {
    let newWord = word;
    for (i=1; i<num; i++) {
        newWord += ' ' + word
    }
    return newWord;
}

module.exports = {echo: echo, shout: shout, repeat: repeat};
// , startOfWord: startOfWord, firstWord: firstWord