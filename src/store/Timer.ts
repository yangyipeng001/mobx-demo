import {makeAutoObservable} from '../which'

class Timer {
    secondPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondPassed++
    }
}

export default Timer