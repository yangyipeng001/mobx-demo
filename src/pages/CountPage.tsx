// import React from 'react'

// import { observer } from "mobx-react-lite"
import { observer, Observer } from "../which"
import count from "../store/count"

function CountPage() {
  return (
    <div>
        <h1>CountPage</h1>

        <Observer>
          {
            () => <button onClick={count.add}>{count.num}</button>
          }
        </Observer>
        {/* <button onClick={count.add}>{count.num}</button> */}
    </div>
  )
}

// export default observer(CountPage)
export default CountPage