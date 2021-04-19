/*---------- helpers ------------*/
const info = (str: string): void => console.log(`*** ${str} ***`);
const formatingPrompt = (str: string): string => str.toLowerCase().trim();
const titleCase = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

/*---------- airlines ------------*/
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

const greeting = (): string | void => {
  let rawUserName = prompt("Hello,👋  could you please introduce your name.");

  let userName =
    rawUserName === "" || rawUserName === null
      ? greeting()
      : alert(
          `Hello ${titleCase(
            rawUserName
          )}, welcome! You can see the results on the console. 🖥️`
        );

  return userName;
};

const displayingFlights = (
  arrFlights: {
    id: number;
    to: string;
    from: string;
    cost: number;
    scale: boolean;
  }[]
): void => {
  info("List of all the flight today 📋   ");

  const display = arrFlights.map((flight) =>
    flight.scale
      ? `
      - The Id: ${flight.id}, of flight  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost of:💸 ${flight.cost}€ and makes a stop 🛑.

    `
      : `
      - The Id: ${flight.id}, of flight  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost of:💸 ${flight.cost}€ and does not make any stop.

    `
  );
  console.log(...display);
};

const averagePrices = (): void => {
  info("This the average price for a flight.");

  const prices = flights.map((price) => price.cost),
    sumOfPrices = prices.reduce((acc, el) => acc + el, 0),
    averageResult = Math.round(sumOfPrices / prices.length);
  console.log(`- The average cost of:💸 flights is ${averageResult}€`);
};

const flightsWithStop = (
  flights: {
    id: number;
    to: string;
    from: string;
    cost: number;
    scale: boolean;
  }[]
) => {
  info("List of flights with stop 🛑.");

  const filterFlightsStop = flights.filter((flight) => flight.scale);
  const printFlights = filterFlightsStop.map(
    (flight) =>
      `
      - The flight  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost of:💸 ${flight.cost}€ and this flight makes a stop 🛑.

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
      - The flight  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost of:💸 ${flight.cost}€ and this flight makes a stop 🛑.

    `
  );

  console.log(...printLastFligths);
};

/*----------------- admin --------------------*/

const addFlights = (): void => {
  let askAddFlight = prompt("Would you like add a flight? y/n"),
    formatingAddFlight = formatingPrompt(askAddFlight),
    id: number,
    to: string,
    from: string,
    cost: string,
    scale: string;

  while (flights.length < 15 && formatingAddFlight === "y") {
    id = flights.length - 1 + 1;
    to = prompt("To where? 🛬");
    let formatingTo = formatingPrompt(to),
      newTo = titleCase(formatingTo);

    from = prompt("From where? 🛫");
    let formatingFrom = formatingPrompt(from),
      newFrom = titleCase(formatingFrom);

    cost = prompt("What is the price? 💸");
    let formatingCost = formatingPrompt(cost),
      newCost = parseInt(formatingCost);

    scale = prompt("Any stops? 🛑 y/n");
    let formatingScale = formatingPrompt(scale),
      newScale = formatingScale === "y" ? true : false;

    const newFlight = {
      id: id,
      to: newTo,
      from: newFrom,
      cost: newCost,
      scale: newScale,
    };

    flights.push(newFlight);

    info("Flight added successfully. 👌");
    console.log(
      `Id: ${newFlight.id}, To:🛬 ${newFlight.to}, From:🛫 ${newFlight.from}, Cost:💸 ${newFlight.cost}, Stop:🛑 ${newFlight.scale}`
    );
    askAddFlight = prompt("Would you like add a flight? y/n");
    formatingAddFlight = formatingPrompt(askAddFlight);
  }

  if (formatingAddFlight === "y" && flights.length === 15) {
    console.log("You have reached the maximum number of flights per day. 🚨");
    alert("You have reached the maximum number of flights per day. 🚨");
  }
  displayingFlights(flights);
};

const deleteFlights = (): void => {
  info(`This is the number of flights, we have ${flights.length}`);
  let askDeleteFlights = prompt("Would you like delete any flight? y/n"),
    formatingDeleteFlight = formatingPrompt(askDeleteFlights);

  while (formatingDeleteFlight === "y") {
    let idToDelete = prompt("What is the id of the flight you want to delete?");

    let findingTheId = flights
      .map((flight) => flight.id)
      .indexOf(parseInt(idToDelete));

    flights.splice(findingTheId, 1);

    info("Flight successfully deleted. 👌");
    info(
      `This is the number of flights we have for today, after modifying them. ${flights.length}`
    );
    askDeleteFlights = prompt("Would you like delete any other flight? y/n");
    formatingDeleteFlight = formatingPrompt(askDeleteFlights);
  }
  displayingFlights(flights);
  console.log("Bye");
};

const admin = (): void => {
  addFlights();
  deleteFlights();
};

/*----------------- user --------------------*/

const filterCostFlights = (
  costFlights: {
    id: number;
    to: string;
    from: string;
    cost: number;
    scale: boolean;
  }[]
) => {
  info("List of your filter flight 📋.");
  let minMaxPrice = prompt(
    "Type the exact price 🎯 that you are looking for: Eg. 200, or max/min"
  );
  const filterFlights = costFlights.map((flight) => flight.cost),
    max = costFlights.filter(
      (flight) => flight.cost === Math.max(...filterFlights)
    ),
    min = costFlights.filter(
      (flight) => flight.cost === Math.min(...filterFlights)
    ),
    equal = costFlights.filter(
      (flight) => flight.cost === parseInt(minMaxPrice)
    );

  formatingPrompt(minMaxPrice) === "max"
    ? console.log(
        ...max.map(
          (flight) =>
            `- The id ${flight.id}, of the most expensive flights of the day  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost:💸 of ${flight.cost}€ and makes a stop 🛑.`
        )
      )
    : formatingPrompt(minMaxPrice) === "min"
    ? console.log(
        ...min.map(
          (flight) =>
            `- The id ${flight.id}, of the cheapest flights of the day  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost:💸 of ${flight.cost}€ and makes a stop 🛑.`
        )
      )
    : equal.length === 0
    ? console.log("We are sorry, we do not have that price.")
    : console.log(
        ...equal.map(
          (flight) =>
            `
          - The id ${flight.id}, of the flights with the exact price that your looking for,  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost:💸 of ${flight.cost}€ and makes a stop 🛑.

          `
        )
      );
};

const chooseFlight = (
  idFlight: {
    id: number;
    to: string;
    from: string;
    cost: number;
    scale: boolean;
  }[]
): void => {
  displayingFlights(flights);
  let askIdFlight = prompt("What is the Id of the flight ✈️, you want to buy?");

  let boughtFlight = idFlight.filter(
    (flight) => flight.id === parseInt(askIdFlight)
  );

  boughtFlight.map(
    (flight) =>
      console.log(
        `- The Id: ${flight.id}, of flight  with origin:🛫 ${flight.from}, and destination:🛬 ${flight.to} has a cost:💸 of ${flight.cost}€ and makes a stop 🛑.`
      ),
    alert(
      "Thank you for your purchase,you can see your flight on the console. Come back soon 👋."
    )
  );
};

const buyFlight = (): void => {
  let wantBuyFlight = prompt("Do you want to buy a flight? y/n"),
    buyFlight = formatingPrompt(wantBuyFlight);
  buyFlight === "y" ? chooseFlight(flights) : alert("See you later! 👋");
};

const user = (): void => {
  filterCostFlights(flights);
  buyFlight();
};

const userOrAdmin = () => {
  let askUser = prompt(
      "Type admin if you are, otherwise you go to be user by default"
    ),
    formatinAskUser: string;
  askUser === "" || askUser === null
    ? userOrAdmin()
    : (formatinAskUser = formatingPrompt(askUser));

  formatinAskUser === "admin" ? admin() : user();
};

const runProgram = (): void => {
  greeting();
  displayingFlights(flights);
  averagePrices();
  flightsWithStop(flights);
  lastFlights(flights);
  userOrAdmin();
};

runProgram();
