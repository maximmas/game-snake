import Field from "./Field"

class Snake {

    public body: any
    public course: string

    private field: Field


    constructor(row: number, col: number, course: string, field: Field) {

        this.body = [
            [row, col],
            [row, col - 1],
            [row, col - 2]
        ];
        this.course = course
        this.field = field

    }

    create() {
        // замя гначинается с головы
        for (let i = 0; i < 3; i++) {
            this.field.showSnakeCell(this.body[i])
        }
    }


    move(direction: string) {

        let newRow: number = this.body[0][0];
        let newCol: number = this.body[0][1];

        let isSnakeAlive: boolean = true

        switch (direction) {
            case 'right':
                if (newCol === 20) {
                    isSnakeAlive = false;
                } else {
                    newCol++;
                }
                break;
            case 'left':
                if (newCol === 1) {
                    isSnakeAlive = false;
                } else {
                    newCol--;
                }
                break;
            case 'up':
                if (newRow === 1) {
                    isSnakeAlive = false;
                } else {
                    newRow--;
                }
                break;
            case 'down':
                if (newRow === 20) {
                    isSnakeAlive = false;
                } else {
                    newRow++;
                }
                break;
        }

        let newHead = [newRow, newCol]
        this.body.unshift(newHead);
        isSnakeAlive = this.field.showSnakeCell(this.body[0]);

        return isSnakeAlive

    }


    addBody() {
        let lastBody = this.body[this.body.length - 1];
        let preLastBody = this.body[this.body.length - 2];
        let newCol;
        let newRow;

        if (lastBody[0] === lastBody[0]) {
            newRow = lastBody[0];
            newCol = lastBody[0] - 1;
        } else {
            newRow = lastBody[0] - 1;
            newCol = lastBody[1];
        }
        this.body.push(newRow, newCol);
    }

    removeBody() {

        let cells = document.querySelectorAll('#matrix div')

        if (cells) {
            for (let cell of cells) {
                cell.classList.remove('on');
            }
        }
    }

}

export default Snake
