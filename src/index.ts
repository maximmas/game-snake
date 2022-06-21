import Field from './Field'
import Result from "./Result"
import Fruit from "./Fruit"
import Snake from "./Snake"

document.addEventListener('DOMContentLoaded', () => {

    let initialTimerValue: number = 300
    let initialSnakeVelocity: number = 500
    let timerSpeed: number = 1000; // ms

    let initFieldSize: Array<number> = [20, 20] // [rows, cols]
    let initSnakePosition: Array<number> = [10, 10] // [row, col]

    let snakeIntervalID: NodeJS.Timer | undefined
    let timerInterval:  NodeJS.Timer | undefined

    let score: number = 0
    let timer: number = 0
    let counter: number = 0

    let direction: string = 'right'

    let snakeIncreaseBodyInterval: number = 10
    let snakeVelocity: number = initialSnakeVelocity
    let isSnakeAlive = true // false - конец игры


    let result = new Result()
    let field = new Field(initFieldSize[0], initFieldSize[1], result);
    let fruit = new Fruit(field)
    let snake = new Snake(initSnakePosition[0], initSnakePosition[0], direction, field)

    field.create();
    result.setTimer(initialTimerValue).showTimer()
    result.showScore(0);


    let startButton = document.getElementById('start')
    if (startButton) {
        startButton.innerText = "Let's get started!"
        startButton.addEventListener('click', (e) => {
            if (startButton) {
                startButton.classList.toggle('hide')
            }
            startGame()
        })
    }

    const startGame = () => {

        timer = result.getTimer()
        snake.create();
        fruit.create();

        timerInterval = setInterval(doTimerStep, timerSpeed);
        snakeIntervalID = setInterval(doSnakeStep, snakeVelocity);
        keyboardHandler()
    }

    const doSnakeStep = () => {
        console.log('snake step')

        isSnakeAlive = snake.move(direction);
        clearInterval(snakeIntervalID);

        counter++;

        if ((counter % snakeIncreaseBodyInterval) === 0) {
            snakeVelocity = snakeVelocity - 15;
            fruit.create();
            snake.addBody();
        }

        if (!isSnakeAlive) {
             endGame();
        }

        snakeIntervalID = setInterval(doSnakeStep, snakeVelocity);

    }

    const endGame = () => {

        clearInterval(snakeIntervalID)
        clearInterval(timerInterval)

        snake.removeBody()
        fruit.removeAllFruits()
        result.showEndGameMessage()

        snakeVelocity = initialSnakeVelocity
        isSnakeAlive = false
        return

    }

    const doTimerStep = () => {
        result.setTimer(timer--).showTimer()
        if (timer < 0) {
            isSnakeAlive = false
        }
    }

    const keyboardHandler = () => {

        document.addEventListener('keyup', (event) => {

            if (!event.repeat) {
                switch (event.code) {
                    case 'ArrowRight':
                        direction = 'right'
                        break;
                    case 'ArrowUp':
                        direction = 'up'
                        break;
                    case 'ArrowDown':
                        direction = 'down'
                        break;
                    case 'ArrowLeft':
                        direction = 'left'
                        break;
                    default:
                        alert('Incorrect key pressed');
                }
            } else {
                // double pressed
            }

        })
    }
})