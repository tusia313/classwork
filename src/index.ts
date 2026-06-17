//Napisz funkcję, która przyjmuje ciąg znaków (np. zdanie) i zwraca najdłuższe słowo z tego zdania. Zignoruj znaki interpunkcyjne.
//Podpowiedź: Przydadzą się metody .replace(), .split() i .sort().

const findLongestWord = (sentence) => {
    // usuwanie znaków interpunkcyjnych
    const cleanedSentence = sentence.replace(, /[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    // dzielenie zdania na słowa
    const words = cleanedSentence.split(' ');
    //sortowanie ( i to jest tablica od najdłuższego do najkrótszego)
    const sortedWords = words.sort((a,b) => b.length - a.length)
    // zwracanie najdłuższego słowa
    return sortedWords[0]
    // a najkrótszego
    return sortedWords[sortedWords.length - 1]
    // a z reduce tablica.reduce(funkcjaStrzalkowa, wartoscPoczatkowa) to by było tak
     return words.reduce((longest, current) = > {
        return current.length > longest.length ? current : longest
     }, '')