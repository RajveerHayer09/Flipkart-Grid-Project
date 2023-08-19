import React from 'react'
import Right from './Right'
import Left from './Left'
import './Body.css'
function Body() {
  return (
    <div className='body'>
        <Left className ='left'>
            left
        </Left>
        <Right className = 'right'>
            right
        </Right>

    </div>
  )
}

export default Body