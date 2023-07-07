// Write your code here
import {components} from 'react'
import './index.css'

class Speedometer extends components {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : {speed: 200},
    )
  }

  applyBreak = () => {
    this.setState(prevState =>
      prevState.speed > 0 ? {speed: prevState.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-color">
        <div>
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img-prop"
            alt="speedometer"
          />
          <h2 className="head">
            Speed is <span className="spanElement">{speed}</span>mph
          </h2>
          <p className="para">Min limit is 0mph,Max limit is 200mph</p>
          <div>
            <button type="button" className="button1" onClick={this.accelerate}>
              Accelerate
            </button>
            <button type="button" className="button2" onClick={this.applyBreak}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
