import React from 'react'


class Counter extends React.Component {
  state = { 
    value: 0, 
    name: this.props.name,
    delta: this.props.initailDelta, 
    autoIncreaseOn : this.props.initailAuto }
  interval = null
  // tang = () =>{
  //     const currentValue = this.state.value
  //     this.setState({value: currentValue + 1})
  // }
  // giam = () =>{
  //     const currentValue = this.state.value
  //     this.setState({value: currentValue - 1})
  // }
  reset = () => {
    // const currentValue = this.state.value
    this.setState({ value: 0 })
  }

  handleValueChange = delta => {
    const currentValue = this.state.value
    this.setState({ value: currentValue + delta })
  }
  handleDeltaChange = delta1 => {
    const currentDelta = this.state.delta
    this.setState({ delta: currentDelta + delta1 })
  }
  autoIncrease = () =>{
    this.setState({ autoIncreaseOn: !this.state.autoIncreaseOn}, ()=>{
      if(this.state.autoIncreaseOn){
        this.interval = setInterval(()=>{
          this.upDateValue()
        }, 500)
      } else {
        clearInterval(this.interval)
      }
    })
  }
  upDateValue = () => {
    const currentDelta = this.state.delta
    const currentValue = this.state.value
    this.setState({ value: currentDelta + currentValue })
  }
componentDidMount = () =>{
  console.log("componentDiMount")
  if(this.state.autoIncreaseOn){
    this.interval = setInterval(()=>{
      this.upDateValue()
    }, 500)}
}

  render() {
    console.log('componentRender')
    const value = this.state.value
    return (
      <div style={modelBody}>
      <div>{this.state.name}</div>
        <div style={{color: 'white'}}>
          Current value:{' '}
          <span style={{ color: changeColor(value) }}>{value}</span>
        </div>
        <div>
          <div>
            <button style={modelBtn} onClick={this.reset}>Reset</button>
          </div>
          <button style={modelBtn} onClick={() => this.handleValueChange(1)}>Up</button>
          <button style={modelBtn} onClick={() => this.handleValueChange(-1)}>Down</button>
          <div style={{color: 'white'}}>Delta: {this.state.delta} </div>
          <button style={modelBtn} onClick={() => this.handleDeltaChange(1)}>Up</button>
          <button style={modelBtn} onClick={() => this.handleDeltaChange(-1)}>Down</button>
        </div>
        <button style={modelBtn} onClick={this.upDateValue}>Update</button>
        <button style={modelBtn} onClick={this.autoIncrease}>
            {this.state.autoIncreaseOn ? 'Stop' : 'Start'} Auto Increase
          </button>
      </div>
    )
    }
  componentWillUnmount = () =>{
    console.log('componentWill..')
    clearInterval(this.interval)
  }
}
  const modelBtn = {
    background: 'blue',
    borderRadius: 5,
    padding: '10px',
    color: 'white',
    border: '1px solid transparent',
    margin: '10px',
    outline: 'none',
    cursor: 'pointer',
  }
  const modelBody = {
    background: '#003366',
  }
const changeColor = value => {
  if (value > 0) return 'green'
  if (value < 0) return 'red'
  return 'yellow'
}

export default Counter
