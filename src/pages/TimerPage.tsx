import {useEffect, useState} from 'react'
import Timer from "../store/Timer"
import {observer, observable, useLocalObservable} from '../which'


const TimerView = observer(({offset}: {offset: number}) => {
    // const [timer] = useState(() => new Timer())

    // const [timer] = useState<any>(() => 
    //     observable({
    //         secondPassed: 0,
    //         increaseTimer() {
    //             this.secondPassed++
    //         }
    //     })
    // )

    const timer = useLocalObservable(() => ({
        offset,
        secondPassed: 0,
        increaseTimer() {
            this.secondPassed++
        },

        resetOffset(_offset: number) {
            this.offset = _offset
        },

        get offsetTime() {
            return this.secondPassed - this.offset
        }
    }))

    useEffect(() => {
        timer.resetOffset(offset)
    }, [offset])

    useEffect(() => {
        const handle = setInterval(() => {
            timer.increaseTimer()
        }, 1000)

        return () => {
            clearInterval(handle)
        }
    }, [timer])

    return (
        <div>
            <h3>TimerView</h3>
            <p>seconds passed: {timer.secondPassed} s</p>
            <p>{timer.offsetTime}</p>
        </div>
    )
})

const TimerPage = () => {
    const [offset, setOffset] = useState(100)

    return (
        <div>
            <h1>TimerPage</h1>
            
            <button onClick={() => setOffset(offset + 100)}>{offset}</button>

            <TimerView offset={offset} />
        </div>
    )
}

export default TimerPage