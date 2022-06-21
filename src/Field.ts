import Result from "./Result";

class Field {

    public rows: number
    public cols: number
    public score: number
    public result: Result


    constructor(rows: number, cols: number, result: Result) {
        this.rows = rows
        this.cols = cols
        this.score = 0
        this.result = result
    }

    create() {
        const cells = this.rows * this.cols;

        let field = document.getElementById('matrix')
        if (!field) return
        field.innerHTML = '';

        for (let i = 0; i < cells; i++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            field.appendChild(cell);
        }
    }

    showSnakeCell(cellCoords: Array<number>): boolean
    {
        let isSnakeAlive = true

        const cellEl = this.getCellElemByCoordinates(cellCoords)
        if (cellEl.classList.contains('fruit')) {
            this.score++;
            this.result.showScore(this.score);
            cellEl.setAttribute("style", "background-image: inherit);")
            cellEl.classList.remove('fruit')
            cellEl.classList.add('on')
        } else if (cellEl.classList.contains('on')) {
            isSnakeAlive = false
        } else {
            cellEl.classList.add('on');
        }

        return isSnakeAlive
    }

    removeSnakeCell(cellCoords: Array<number>)
    {
        const cellEl = this.getCellElemByCoordinates(cellCoords)
        cellEl.classList.remove('on');
    }


    addFruitCell(cellCoords: Array<number>) {

        const cellEl = this.getCellElemByCoordinates(cellCoords)
        const imageId = Math.floor((Math.random() * 10));
        if (!cellEl.classList.contains('on')) {
            cellEl.classList.add('fruit')
            cellEl.setAttribute("style", "background-image: url(img/" + imageId + ".png);")
        }
    }

    getCellElemByCoordinates(cellCoords: Array<number>)
    {
        let row = cellCoords[0]
        let col = cellCoords[1]

        let index =  (row - 1) * this.cols + col - 1
        let allCells = document.querySelectorAll('.cell')
        return allCells[index]

    }

    removeFruitCell(cellCoords: Array<number>) {

        const cellEl = this.getCellElemByCoordinates(cellCoords)
        cellEl.classList.remove('fruit');
    }

}

export default Field