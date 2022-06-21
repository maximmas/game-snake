class Result {

    public fruitsEatenNumber: number
    private timerValue: number


    public constructor() {
        this.fruitsEatenNumber = 0
        this.timerValue = 0
    }

    setTimer(value: number): Result {
        this.timerValue = value
        return this
    }

    getTimer(): number {
        return this.timerValue
    }

    showTimer(): void {
        let el = document.querySelector('#timer b')
        if (!el) return
        el.innerHTML = String(this.timerValue)
    }

    showScore(value: number) {
        let el = document.querySelector('#score b')
        if (!el) return
        el.innerHTML = String(value)
    }

    showEndGameMessage(){

        let msgEl = document.getElementById('intro')
        if(msgEl){
            msgEl.classList.add('show')
            msgEl.innerText = 'Game over!'
        }
        let buttonEl = document.getElementById('start')
        if(buttonEl){
            buttonEl.innerText = 'Let me try again,please!'
        }

    }

}

export default Result