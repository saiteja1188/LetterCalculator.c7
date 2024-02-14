// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChangeCount = event => {
    const {value} = event.target

    this.setState({count: value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letter-container">
          <div className="search-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div>
            <label htmlFor="letter" className="label-title">
              Enter the phrase
            </label>
            <input
              type="search"
              id="letter"
              className="search-input"
              placeholder="Enter the phrase"
              onChange={this.onChangeCount}
              type="text"
              value={count}
            />
            </div>
            <p className="button">No.of letters: {count.length}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="letter-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
