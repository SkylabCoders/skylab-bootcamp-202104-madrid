/**
 * Print hello world starting with a delay of 1 second
 * increment the delay 1 second each time
 * second time will have a delay of 2 seconds
 * third time will hace a delay of 3 seconds
 * include the delay in the print
 * Only use const (no let, no var) and setTimeout
 */

 const challenge1 = (number) => {
 setTimeout(() => {
   console.log('Hello World ' + number);
   challenge1(number + 1);
 }, number * 1000);
}
 
 challenge1(1);

/**
 * Challenge 2:
 Just like Challenge 1 but this time with repeated delay values.
 Print Hello World 5 times with a delay of 100 ms.
 Then Print it again 5 more times with a delay of 200 ms.
 Then print it again 5 more times with a delay of 300 ms.
 And so on until the program is killed.
 Include the delay in the printed message:
 Hello World. 100
 Hello World. 100
 Hello World. 100
 Hello World. 100
 Hello World. 100
 Hello World. 200
 Hello World. 200
 Hello World. 200
 ...
 Constraints:
  - Only use setInterval (not setTimeout)
  - Use only ONE if statement
 */
 
  let lastIntervalId, counter = 5;
  
  const challenge2 = delay => {
    if (counter === 5) {
      clearInterval(lastIntervalId);
      lastIntervalId = setInterval(() => {
        console.log('Hello World. ', delay);
        challenge2(delay + 100);
      }, delay);
      counter = 0;
    }counter += 1;
  };
  
  challenge2(100);


