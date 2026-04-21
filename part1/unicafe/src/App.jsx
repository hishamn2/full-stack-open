import { useState } from 'react'
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  const average = (good * 1 + neutral * 0 + bad * -1) / total
  const positive = (good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  )
}
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>
 const Display =(props) => <p> {props.text}</p>
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text={"give feedback"}  />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
     <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App