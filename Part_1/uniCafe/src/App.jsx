import { useState } from "react";
import "./App.css";

const Button = (props) => (
  <button onClick={props.HandleClick}>{props.text}</button>
);

const StatisticLine = (props) => {
  return (
    <h2>
      {props.text}
      {props.value}
    </h2>
  );
};

const Statistics = (props) => {
  if (props.allCounter == 0) {
    return <h2>No feedback given</h2>;
  } else {
    return (
      <div>
        <table className="tableStatistic">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <StatisticLine text="Good:"></StatisticLine>
              </td>
              <td>
                <StatisticLine value={props.goodCounter}></StatisticLine>
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="Neutral:"></StatisticLine>
              </td>
              <td>
                <StatisticLine value={props.neutralCounter}></StatisticLine>
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="Bad:"></StatisticLine>
              </td>
              <td>
                <StatisticLine value={props.badCounter}></StatisticLine>
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="All:"></StatisticLine>
              </td>
              <td>
                <StatisticLine value={props.allCounter}></StatisticLine>
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="Average:"></StatisticLine>
              </td>
              <td>
                <StatisticLine value={props.averageCounter}></StatisticLine>
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text="Positive:"></StatisticLine>
              </td>
              <td>
                <StatisticLine value={props.positiveCounter}></StatisticLine>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const HandleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const HandleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const HandleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <p>Give Feedback</p>
      <Button HandleClick={HandleGood} text={"Good"}></Button>
      <Button HandleClick={HandleNeutral} text={"Neutral"}></Button>
      <Button HandleClick={HandleBad} text={"Bad"}></Button>
      <p>Statistics</p>
      <Statistics
        goodCounter={good}
        neutralCounter={neutral}
        badCounter={bad}
        allCounter={all}
        averageCounter={(all / 3).toFixed(1)} //.toFixed para liminar los decimales
        positiveCounter={((good / all) * 100).toFixed(1)}
      ></Statistics>
    </div>
  );
};

export default App;
