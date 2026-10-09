import type { Fruit } from "./fruitBasket.ts";

let basket: Fruit;   // Działa! (użycie jako typ)
new Fruit();         // BŁĄD! (użycie jako wartość wykonawcza w runtime)


