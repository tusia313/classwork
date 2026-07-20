interface OvenReady {
  bakeTime: number;
  temp: number;
}

// TWOJE ZADANIE:
// 1. Zmień funkcję na generyczną (dodaj literkę T).
// 2. Użyj słówka 'extends', aby "bramkarz" wpuszczał tylko typy zgodne z OvenReady.
// 3. Podmień 'unknown' na swój generyczny typ.

function putInOven<T extends OvenReady>(item: T) {
  console.log(`Nagrzewam do ${item.temp}°C. Pieczemy przez ${item.bakeTime} min.`);
  return item;
}

// --- TESTY ---

const jagodzianka = { 
  name: "Jagodzianka z kruszonką", 
  bakeTime: 25, 
  temp: 180 
};

const wagaKuchenna = { 
  brand: "Zelmer", 
  batteryLevel: 80 
};

// Pierwsze wywołanie powinno przejść gładko:
putInOven(jagodzianka); 

// Drugie wywołanie powinno podświetlić się na czerwono (wagi nie wkładamy do pieca!):
putInOven(wagaKuchenna);