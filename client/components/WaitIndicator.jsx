import React from 'react'

const WaitIndicator = (props) => {
  return (
    <div className='error'>
      {props.waiting && <img className='waitIndicator' src='/images/animated-circle.gif' />}
    </div>
  )
}

// function (state) {
//   return {
//     waiting: state.waiting
//   }
// }

export default WaitIndicator
