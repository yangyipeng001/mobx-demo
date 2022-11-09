import {useEffect, useState} from 'react'
import Timer from "../store/Timer"
import {observer, observable, useLocalObservable} from '../which'


const TimerView = observer(() => {
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
        secondPassed: 0,
        increaseTimer() {
            this.secondPassed++
        }
    }))

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
        </div>
    )
})

const TimerPage = () => {
    return (
        <div>
            <h1>TimerPage</h1>

            <TimerView />
        </div>
    )
}

export default TimerPage