import { randomGridPosition } from "./grid.js";
import { expantion, onSnake } from "./snake.js";
let food = getRandomFoodPosition();
const EXPANSTION_RATE = 1;
export function update() {
  if (onSnake(food)) {
    expantion(EXPANSTION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  console.log(newFoodPosition);
  return newFoodPosition;
}
