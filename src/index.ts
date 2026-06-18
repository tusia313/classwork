//Zadanie 4: Licznik samogłosek (Vowel Count)Napisz funkcję countVowels(str), która przyjmuje ciąg znaków (np. pojedyncze słowo lub całe zdanie) i zwraca liczbę samogłosek (a, e, i, o, u), które w nim występują. Wielkość liter nie powinna mieć znaczenia.
//Przykład: countVowels("Inzynieria") powinno zwrócić 5.

//Podpowiedź: Masz tu dwie drogi. Albo rozbijasz string na tablicę liter za pomocą .split('') i używasz .filter()

const countVolwes = (str) => {
    const volwes = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase()
    const count = lowerCaseStr.split('').filter(letter => volwes.includes(letter).length)
    return count.length
}
