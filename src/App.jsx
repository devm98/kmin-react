import React from 'react'

import Counter from './Counter'

class App extends React.Component{
  state = {showCounter: true}

  handleToggleCounter = () =>{
    this.setState({showCounter: !this.state.showCounter})
  }
  render() {
    return (
      <div>
        {this.state.showCounter ? <Counter name="Couter 1" initailAuto={true} initailDelta={4}/> : null}
        {this.state.showCounter ? <Counter name="Couter 2" initailAuto={false} initailDelta={10}/> : null}

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