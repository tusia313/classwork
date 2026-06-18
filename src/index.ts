//Zadanie 2: Suma parzystych. Funkcja przyjmująca tablicę liczb, wybierająca tylko parzyste i zwracająca ich sumę.
const sumEvenNumbers = (numbers) => {
 return numbers
    .filter((number) => number % 2 === 0)
    .reduce((sum, number) => sum + number, 0)
};