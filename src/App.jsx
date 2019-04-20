import React from 'react'

import Counter from './Counter'

class App extends React.Component{
  state = {showCounter: true,
  delta: 1,}

  handleToggleCounter = () =>{
    this.setState({showCounter: !this.state.showCounter})
  }
  handleDeltaChange = nextDelta =>{
    this.setState({delta: nextDelta})
  }
  render() {
    return (
      <div>
        {this.state.showCounter ? 
        (<div>
          <Counter name="Couter 1" initailAuto={false}  delta={this.state.delta} onDeltaChange={this.handleDeltaChange}
        />
        <Counter name="Couter 2" initailAuto={false}  delta={this.state.delta} onDeltaChange={this.handleDeltaChange}
        />
      </div>
        ) : null}
        <button style={{
          background: 'red',
          borderRadius: 5,
          padding: '10px',
          color: 'yellow',
          fontWeight: 700,
          border: '1px solid transparent',
          margin: '10px',
          outline: 'none',
          cursor: 'pointer',
        }} onClick={this.handleToggleCounter}>{this.state.showCounter ? 'Hide' : 'Show'}
        </button>
      </div>
    )
    
  }
}

export default App;