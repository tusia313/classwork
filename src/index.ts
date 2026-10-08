interface User {
  name: string;
}

// Gdzieś indziej w kodzie dorzucasz to samo:
interface User {
  age: number;
}

// Wynik: TypeScript traktuje to jako jeden połączony obiekt:
// { name: string; age: number; }
