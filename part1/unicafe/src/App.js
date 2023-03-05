import { useState } from 'react'
import React from 'react'

const Statistics = (props) => {
  if(props.good || props.bad || props.neutral) {
    return(
        <React.Fragment>
        <table>
          <tbody>
            <StatisticLine text = 'good' value = {props.good} />
            <StatisticLine text = 'neutral' value = {props.neutral} />
            <StatisticLine text = 'bad' value = {props.bad} />
            <StatisticLine text = 'all' value = {props.good + props.neutral + props.bad} />
            <StatisticLine text = 'average' value = {(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
            <StatisticLine text = 'positive' value = {props.good * 100/(props.good + props.neutral + props.bad) + '%'} />
          </tbody>
        </table>
        </React.Fragment>
    )
  }
  
  return (
    <div>no feedback given</div>
  )
}

const StatisticLine = (props) => {
  return(
      <React.Fragment>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </React.Fragment>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onclick}>{props.name}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick = {()=> setGood(good + 1)} name = 'good' />
      <Button onclick = {()=> setNeutral(neutral + 1)} name = 'neutral' />
      <Button onclick = {()=> setBad(bad + 1)} name = 'bad' />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App