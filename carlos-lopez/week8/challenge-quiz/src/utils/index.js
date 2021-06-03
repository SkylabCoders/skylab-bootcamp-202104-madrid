/* eslint-disable import/prefer-default-export */
let currentIndex;
export function randomIndex() {
  currentIndex = Math.floor(Math.random() * 4);
  return currentIndex;
}
