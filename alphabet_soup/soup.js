/*
# Alphabet Soup

Create a function alphabet_soup($str) that accepts a string and will
return the string in alphabetical order. E.g. "hello world" becomes
"ehllo dlorw". So make sure your function separates and alphabetizes
each word separately.


*/

function alphabet_soup(str) {
    let arr = str.split(' ');
    let result = ''
    arr.forEach((word) => {
        let wordArr = word.split('');
        wordArr = wordArr.sort();
        wordStr = wordArr.join('');
        result += wordStr + ' ';
    })
    result = result.trim();
    return result;
}

console.log(alphabet_soup('hello world'));