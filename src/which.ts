import {
    observable, 
    makeAutoObservable,
    makeObservable,
    action,
    computed,
    Reaction,
    AnnotationsMap,
} from 'mobx'
// import {observer, Observer, useLocalObservable} from 'mobx-react-lite'
import {observer, Observer, useLocalObservable} from './my-mobx-react-lite'

export type {AnnotationsMap}

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
    useLocalObservable,
}