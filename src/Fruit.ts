import Field from "./Field";

class Fruit{

    // public body: Array<number>
    public field: Field

    constructor(field: Field) {
        // this.body = [1, 1]
        this.field = field
    }

    create() {
        for (let i = 0; i < 3; i++) {
            // let x = Math.floor((Math.random() * 20));
            // let y = Math.floor((Math.random() * 20));

            // random int between min and max included
            //Math.floor(Math.random() * (max - min + 1)) + min;
            let x = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            let y = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

            // this.body = [x, y];
            // console.log(this.body)
            // this.field.setCell(this.body, true, 'fruit');
            this.field.addFruitCell([x,y])
        }
    }

    removeAllFruits(){
        let fruits = document.querySelectorAll('.fruit')
        for (let fruit of fruits) {
            fruit.setAttribute("style", "background-image: inherit);")
        }
    }
}

export default Fruit