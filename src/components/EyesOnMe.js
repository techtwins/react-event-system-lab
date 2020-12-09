// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  
  focusBtn = () => console.log('Good!')

  blurBtn = () => console.log('Hey! Eyes on me!')

  render() {
    return ( <button onFocus={this.focusBtn} onBlur={this.blurBtn}>Look Here</button> )
  }
}

export default EyesOnMe