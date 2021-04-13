let username,
  numbers,
  newNumber,
  isLine = false,
  isBingo,
  startingScore = 300,
  turns = 0,
  finalScore,
  ranking = [],
  arrOfNumbers = [],
  bingoCard = [];

const itsAMatch = () =>
  console.log(`✔️   IT'S A MATCH! The number ${newNumber} is un the card`);

const notAMatch = () =>
  console.log(`❌ The number ${newNumber} is not in the list.`);

const callLine = () => console.log("WAIT A MINUT! You got a LINE! 🎉🎉🎉 .");

const callBingo = () =>
  console.log("STOP! It's BINGO! 🎊🎊🎊 Winner winner chicken dinner!");

const endGame = () => {
  console.log(`🖖   Ciao ${username}!`);
};

const userValidator = (name) => {
  if (name === "" || name === null) {
    name = "Stranger";
  }
  console.log(
    `
Welcome, ${name}! Let's play Bingo.

Rules are simple: you get a card with 15 random numbers in it from range 1 to 90.

As soon as the numbers are called, you can check if they match with any of the numbers of your card.

The less turns to match every number in your card, the more points you get up to a total of 90.

Good luck!
   `
  );
};

const newUser = () => {
  username = prompt(
    "Welcome. Could you please enter your name:",
    "Your name..."
  );

  userValidator(username);
};

const rngNumbers = (maxNumbers) => {
  while (arrOfNumbers.length < maxNumbers) {
    let number = Math.floor(Math.random() * 30) + 1;
    if (arrOfNumbers.indexOf(number) === -1) {
      arrOfNumbers.push(number);
    }
  }
  return arrOfNumbers;
};

// const numberGenerator = () => (newNumber = rngNumbers(30)[0]);
numbers = rngNumbers(30);
newNumber = numbers[0];

const randomNumber = (card) => {
  let numbersToCard = rngNumbers(15);
  for (i in card) {
    for (j in card[i]) {
      card[i][j].number = numbersToCard[0];
      numbersToCard.shift();
    }
  }
};

const bingoCardMaker = () => {
  const bingoCard = {
    row1: [
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
    ],
    row2: [
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
    ],
    row3: [
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
      { number: randomNumber, matched: false },
    ],
  };
  randomNumber(bingoCard);
  return bingoCard;
};

const cardToArray = (card) => {
  for (let i in card) {
    const arrayCard = [];
    for (let j in card[i]) {
      arrayCard.push(card[i][j].number);
    }
    console.log(arrayCard);
  }
};

const showBingoCard = () => {
  bingoCard = bingoCardMaker();
  cardToArray(bingoCard);

  let answer = confirm("D'ya like dis card or you fancy another one? 🤔");
  if (answer) {
    console.clear();
    console.log("Cool! No prob-llama 🦙. Let's roll it again 🎲");
    return showBingoCard();
  } else {
    return bingoCard;
  }
};

const updateBingoCard = (newNumber, card) => {
  for (let i in card) {
    for (let j in card[i]) {
      if (card[i][j].number === newNumber) {
        card[i][j].number = "X";
        card[i][j].matched = true;
        var isMatch = card[i][j].matched;
        itsAMatch();
      }
    }
  }
  if (!isMatch) {
    notAMatch();
  }
};

const checkLine = (line, card) => {
  if (!line) {
    for (let i in card) {
      line = true;
      for (let j in card[i]) {
        if (card[i][j].matched === false) {
          line = false;
          break;
        }
      }
      if (line) {
        callLine();
        return line;
      }
    }
  }
  return line;
};

const checkBingo = (bingo, card) => {
  bingo = true;
  for (let i in card) {
    for (let j in card[i]) {
      if (card[i][j].matched === false) {
        bingo = false;
        break;
      }
    }
  }
  if (bingo) {
    callBingo();
    return bingo;
  }
};

const turnFlow = (turns, card) => {
  newNumber = rngNumbers(30)[0];
  numbers = rngNumbers(30);
  numbers.shift();
  console.log(`Turn: ${turns} . The next number is 🥁🥁🥁... ${newNumber}`);
  updateBingoCard(newNumber, card);
  cardToArray(card);
};

const rankingDesc = (a, b) => {
  return b.score - a.score;
};

const showRanking = (ranking) => {
  console.log("🏆RANKING🏆");
  console.log("#PLAYER SCORE");
  let rank = 1;
  let medal;
  for (let i in ranking) {
    if (rank === 1) {
      medal = "🥇";
    } else if (rank === 2) {
      medal = "🥈";
    } else if (rank === 3) {
      medal = "🥉";
    } else {
      medal = "#";
    }
    console.log(`${rank} ${medal} ${ranking[i].user} ${ranking[i].score}`);
    rank++;
  }
};

const gameOver = (username, finalScore, turns) => {
  const userScore = { user: username, score: finalScore };
  ranking.push(userScore);
  ranking = ranking.sort(rankingDesc);
  console.log(
    `Your score is ${finalScore} points, and lasted ${turns} turns to match every number in the card.`
  );
  showRanking(ranking);
  console.log("Rematch?");
  let rematch = confirm("Rematch?");
  if (rematch) {
    bingo();
  } else {
    endGame();
  }
};

const notRepeat = () => {
  if (arrOfNumbers.indexOf(newNumber) !== -1) {
    console.log("me repeti");
  } else {
    console.log("no me repito");
  }
};

const bingo = () => {
  isBingo = false;
  newUser();
  showBingoCard();

  while (!isBingo) {
    let answer = confirm("D'ya wanna roll another one?");
    if (answer) {
      console.clear();

      turns++;
      turnFlow(turns, bingoCard, isLine, isBingo);
      isLine = checkLine(isLine, bingoCard);
      isBingo = checkBingo(isBingo, bingoCard);
      notRepeat();
      if (isBingo) {
        finalScore = startingScore - turns;
        gameOver(username, finalScore, turns);
        break;
      }
    } else {
      endGame();
      break;
    }
  }
};

bingo();
