// import { action, makeAutoObservable, makeObservable, observable } from "mobx"
import { 
    action, 
    makeAutoObservable, 
    makeObservable, 
    observable 
} from "../which"

class Count {
    num = 0

    constructor() {
        // makeAutoObservable(this)
        makeObservable(this, {
            num: observable,
            add: action
        })
    }

    add = () => {
        this.num++
    }
}

const count = new Count()

export default count
