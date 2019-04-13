import React from 'react' 


// var styleBtn = {
    //     border = '1px solid transperant',   
    // }
    class Counter extends React.Component{
        state={ value : 0, delta: 0,} 

        // tang = () =>{
        //     const currentValue = this.state.value
        //     this.setState({value: currentValue + 1})
        // }
        // giam = () =>{
        //     const currentValue = this.state.value
        //     this.setState({value: currentValue - 1})
        // }
        reset = () => {
            const currentValue = this.state.value
            this.setState({value: 0})
        } 

        
      handleValueChange = (delta) => {
        const currentValue = this.state.value
        this.setState({ value: currentValue + delta })
      }
      handleDeltaChange = (delta1) => {
        const currentDelta = this.state.delta
        this.setState({ delta: currentDelta + delta1 })
      }

      upDateValue = () =>{
        const currentDelta = this.state.delta
        const currentValue = this.state.value
        this.setState({value : currentDelta + currentValue})
      }
      render() {
        const value = this.state.value
        return (<div>
          <div >Current value: <span style={{ color: changeColor(value) }}>{value}</span></div>
          <div>
            <div>
              <button onClick={this.reset}>Reset</button>
            </div>
            <button onClick={() => this.handleValueChange(1)}>Up</button>
            <button onClick={() => this.handleValueChange(-1)}>Down</button>
            <div>Delta: {this.state.delta} </div>
            <button onClick={() => this.handleDeltaChange(1)}>Up</button>
            <button onClick={() => this.handleDeltaChange(-1)}>Down</button>
          </div>
          <button onClick={this.upDateValue}>Update</button>
        </div>)
      }
}


const changeColor = value =>{
    if(value>0) return 'green'
    if(value<0) return 'red'
    return 'black'
}

export default Counter 