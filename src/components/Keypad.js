// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  passInput = () => console.log('Entering password...')

  render() {
    return ( <input onKeyUp={this.passInput} type="password"></input> )
  }
}

export default Keypad