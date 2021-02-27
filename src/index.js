import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './component/Clock';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function tick() {
  const element = (
    <Clock />
  );

  ReactDOM.render(
    element,
    document.getElementById('clock')
  )
}

// setInterval(tick, 1000);
tick();

// function Welcome(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// ReactDOM.render(
//   <Welcome name="Sara" />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
