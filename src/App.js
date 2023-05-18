import React from 'react'
import './App.css'
import kate from './img/kate.jpg'

function App() {
  return (
    <div className="App">
      <div className="flexbox">
        <div className="identity">
          <img src={kate} className="kate" alt="kate" />
          <h4>Report for</h4>
          <h2>
            Catherine <br></br>Onyango
          </h2>
          <div />
          <div className="reports">
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </div>
        </div>
      </div>
      <div className="">
        <div className="box">
          <div className="color1"></div>
          <div className="menu">
            <div className="wrk">Work</div>
            <div className="dot">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <h1>32hrs</h1>
          <h4>Last Week-36hrs</h4>
        </div>

        <div className="box">
          <div className="color2"></div>
          <div className="menu">
            <div className="wrk">Exercises</div>
            <div className="dot2">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <h1>4hrs</h1>
          <h4>Last Week-5hrs</h4>
        </div>
      </div>

      <div className="">
        <div className="box">
          <div className="color3"></div>
          <div className="menu">
            <div className="wrk">Play</div>
            <div className="dot">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <h1>10hrs</h1>
          <h4>Last Week-8hrs</h4>
        </div>

        <div className="box">
          <div className="color4"></div>
          <div className="menu">
            <div className="wrk">
              Social
            </div>
            <div className="dot2">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <h1>5hrs</h1>
          <h4>Last Week-10hrs</h4>
        </div>
      </div>

      <div className="">
        <div className="box">
          <div className="color5"></div>
          <div className="menu">
            <div className="wrk">study</div>
            <div className="dot">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <h1>4hrs</h1>
          <h4>Last Week-7hrs</h4>
        </div>

        <div className="box">
          <div className="color6"></div>
          <div className="menu">
            <div className="wrk">Self Care</div>
            <div className="dot2">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
          <h1>2hrs</h1>
          <h4>Last Week-2hrs</h4>
        </div>
      </div>
    </div>
  );
}

export default App


