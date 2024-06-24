/* ------------------  STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------  RESOURCES -------------------*/
import React, { useState } from 'react';

export default function Index() {
  const [num, setNum] = useState()
  const [nums, setNums] = useState([0,1])
    
  function belongsToF(numChosen) {
    while (numChosen > nums[nums.length -1]) {
      setNums(nums)
        nums.push(((nums[nums.length -1] + nums[nums.length -2])))
    }
    console.log(nums)
    nums.includes(numChosen) ? console.log('O número existe na Sequência Fibonacci') : console.log('O número não existe na Sequência Fibonacci')
  }

    return (
      <main className={`${styles.container} d-flex justify-content-center align-items-center`}>
        <div className={``}>
          <h1 className={``}>Belongs to Fibonacci ?</h1>
          <p> {num} Type a number to check if belongs to Fibonacci sequence</p> 
          <input 
          type="text"
          onKeyUp={(e) => {
            setNum(e.target.value)
          }}
          />
          <button onClick={() => belongsToF(num)}>Check</button>
        </div>
      </main>
    )

}


