/* ------------------  STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------  RESOURCES -------------------*/
import React, { useState } from 'react';

export default function Index() {
  const [num, setNum] = useState()
  const [nums, setNums] = useState([0,1])
  const [message, setMessage] = useState('')
    
  function belongsToF(numChosen) {
    if(typeof numChosen !== 'number') {
      setMessage('Insert a valid number')
      return
    }
      
    while (numChosen > nums[nums.length -1]) {
      setNums(nums)
        nums.push(((nums[nums.length -1] + nums[nums.length -2])))
    }
    
    nums.includes(numChosen) ? setMessage('The number exists in Fibonacci sequence') : setMessage("The number doesn'texists in Fibonacci sequence")
  }

    /* ------------------ PAGE -------------------*/
    return (
      <div className={`${styles.height}`}>
        <main className={`${styles.container} d-flex justify-content-center align-items-center`}>
          <div className={``}>
            <h1 className={``}>Belongs to Fibonacci ?</h1>
            <p> Type a number to check if belongs to Fibonacci sequence</p> 
            <div className={`d-flex justify-content-center align-items-center`}>
              <input 
              className={`me-2`}
              type="text"
              onKeyUp={(e) => {
                setNum(parseInt(e.target.value))
              }}
              />  
            <button className={`btn btn-secondary`} onClick={() => belongsToF(num)}>Check</button>
            </div>
            <div className={`d-flex justify-content-center mt-3`}>
              {message}
            </div>
            </div>
        </main>
      </div>
    )

}


