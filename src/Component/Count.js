import React, { useEffect, useState } from 'react'

//styling
import './Count.css'

const Count = (props) => {
  const { type, number, duration } = props.data

  // number displayed by component
  const [count, setCount] = useState('0')

  useEffect(() => {
    let start = 0
    let typeSign = type
    let end

    // first three numbers from props

    if (number.includes('-')) {
      const [min, max] = number.split('-')
      end = parseInt(max)
      typeSign = type // In case you want to display the type from the data
    } else {
      end = parseInt(number)
    }

    // if zero, return
    if (start === end) return

    // find duration per increment
    let totalMilSecDur = parseInt(duration)
    let incrementTime = (totalMilSecDur / (end - start)) * 1000
    let timer = setInterval(() => {
      start += 1
      setCount(`${start}${typeSign}`)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    // cleanup function
    return () => clearInterval(timer)
    // dependency array
  }, [number, duration, type])

  return (
    <div className="Count">
      <h3>
        {count}
        {/* {type} */}
      </h3>
    </div>
  )
}

export default Count
