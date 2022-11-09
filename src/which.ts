import {
    observable, 
    makeAutoObservable,
    makeObservable,
    action,
    computed,
    Reaction
} from 'mobx'
// import {observer, Observer} from 'mobx-react-lite'
import {observer, Observer} from './my-mobx-react-lite'


export {
    // mobx
    makeAutoObservable,
    observable,
    makeObservable,
    action,
    computed,
    Reaction,

    // mobx-react-lite
    observer,
    Observer,
}