let flights: {
  id: number;
  to: string;
  from: string;
  cost: number;
  scale: boolean;
}[];

flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const info = (str: string): void => console.log(`*** ${str} ***`);

const greeting = (): void => {
  let userName = prompt("Hello, could you please introduce your name.");
  alert(`Hello ${userName}, welcome! You can see the results on the console.`);
  console.log(
    `Hello ${userName}, welcome! You can see all the flights from today.`
  );
};

const displayingFlights = (
  arrFlights: {
    id: number;
    to: string;
    from: string;
    cost: number;
    scale: boolean;
  }[]
) => {
  info("List of all the flight today");

  const display = arrFlights.map((flight) =>
    flight.scale
      ? `
      - The flight with origin: ${flight.from}, and destination: ${flight.to} has a cost of ${flight.cost}€ and makes a stop.

    `
      : `
      - The flight with origin: ${flight.from}, and destination: ${flight.to} has a cost of ${flight.cost}€ and does not make any stop.

    `
  );
  console.log(...display);
};

const averagePrices = (): void => {
  info("This the average price for a flight.");

  const prices = flights.map((price) => price.cost),
    sumOfPrices = prices.reduce((acc, el) => acc + el, 0),
    averageResult = Math.round(sumOfPrices / prices.length);
  console.log(`- The average cost of flights is ${averageResult}€`);
};

const flightsWithStop = (
  flights: {
    id: number;
    to: string;
    from: string;
    cost: number;
    scale: boolean;
  }[]
): void => {
  info("List of flights with stop.");

  const filterFlightsStop = flights.filter((flight) => flight.scale);
  const printFlights = filterFlightsStop.map(
    (flight) =>
      `
      - The flight with origin ${flight.from}, and destination: ${flight.to}, has a cost of ${flight.cost}€ and this flight makes a stop.

    `
  );
  console.log(...printFlights);
};

const lastFlights = (
  flights: {
    id: number;
    to: string;
    from: string;
    cost: number;
    scale: boolean;
  }[]
): void => {
  info("List of the last five flights.");

  const filterLastFlights = flights.filter(
    (flight) => flight.id >= flights.length - 5
  );

  const printLastFligths = filterLastFlights.map(
    (flight) =>
      `
      - The flight with origin ${flight.from}, and destination: ${flight.to}, has a cost of ${flight.cost}€ and this flight makes a stop.

    `
  );

  console.log(...printLastFligths);
};

const runProgram = (): void => {
  greeting();
  displayingFlights(flights);
  averagePrices();
  flightsWithStop(flights);
  lastFlights(flights);
};

runProgram();
