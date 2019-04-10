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

const startOfWord = (word, num) => {
    return word.substring(0,num);
}

const firstWord = (word) => {
    spacePlace = word.indexOf(' ');
    return word.substring(0,spacePlace);
}
module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};