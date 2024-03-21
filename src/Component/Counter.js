import React, { useEffect, useState } from 'react'

//styling
import './Count.css'

const Counter = (props) => {
  const { type, number, duration } = props.data

  const [minCount, setMinCount] = useState('0')
  const [maxCount, setMaxCount] = useState('0')

  useEffect(() => {
    let minStart = 0
    let maxStart = 0

    // If the number is in the format of range
    if (number.includes('-')) {
      const [min, max] = number.split('-')

      // Setting up the minimum counter
      const minEnd = parseInt(min)
      let totalMilSecDurMin = parseInt(duration)
      let minIncrementTime = (totalMilSecDurMin / (minEnd - minStart)) * 1000
      let minTimer = setInterval(() => {
        minStart += 1
        setMinCount(`${minStart}`)
        if (minStart === minEnd) clearInterval(minTimer)
      }, minIncrementTime)

      // Setting up the maximum counter
      const maxEnd = parseInt(max)
      let totalMilSecDurMax = parseInt(duration)
      let maxIncrementTime = (totalMilSecDurMax / (maxEnd - maxStart)) * 1000
      let maxTimer = setInterval(() => {
        maxStart += 1
        setMaxCount(`${maxStart}${type}`)
        if (maxStart === maxEnd) clearInterval(maxTimer)
      }, maxIncrementTime)

      // Cleanup functions
      return () => {
        clearInterval(minTimer)
        clearInterval(maxTimer)
      }
    } else {
      // If the number is a single value
      setMinCount(number)
      setMaxCount(number)
    }
  }, [number, duration, type])

  return (
    <div className="Count">
      <h3>
        {minCount} - {maxCount}
      </h3>
    </div>
  )
}

export default Counter
