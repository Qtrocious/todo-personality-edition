import { useState } from 'react'
import './App.css'

function App() {
  const [ping, setPing] = useState(0)

  return (
    <>
    <h1>Ping your dude, dude.</h1>
      <div>
        <form action="/pinging.db">
          <label>Choose reason: </label>
          <select name="reason" id="reasons">
            <option value="reels">Reels</option>
            <option value="youtube">Youtube</option>
            <option value="talk">Talk</option>
          </select>
          <br/><br/>
      <div>
        <button className="ping-button">Send ping</button>
      </div>
        </form>
      </div>
    </>
  )
}

export default App
