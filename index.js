import { draw as drawFood, update as updateFood } from "./food.js";
import { outSideGrid } from "./grid.js";
import {
  draw as drawSnake,
    getSnakeHead,
    snakeIntersection,
  SNAKE_SPEED,
  update as updateSnake,
} from "./snake.js";

var lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-container");

function main(currentTime) {

    if(gameOver) {

        if(confirm("You Lost. Press Ok to restart")){
            window.location = '/'
        }
        return 
    }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}