import { useState } from 'react'
 const Display =(props) => <p> {props.text}</p>
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text={"give feedback"}  />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Display text={"statistics"}  />
      <Display text={"good " + good}  />
      <Display text={"neutral " + neutral}  />
      <Display text={"bad " + bad}  />
      <Display text={"all " + (good + neutral + bad)}  />
      <Display text={"average " + (good - bad) / (good + neutral + bad)}  />
      <Display text={"positive " + (good / (good + neutral + bad) * 100) + " %"}  />
    </div>
  )
}

export default App