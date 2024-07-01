/* ------------------  STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------  RESOURCES -------------------*/
import React, { useState } from 'react';

export default function Index() {
  const [str, setStr] = useState('')
  const [result, setResult] = useState('')

  function invert(string) {
    const reversedString = string.split('').reverse().join('')
    setResult(reversedString)
  }

    /* ------------------ PAGE -------------------*/
    return (
      <div className={`${styles.height}`}>
        <main className={`${styles.container} d-flex justify-content-center align-items-center`}>
          <div className={``}>
            <h1 className={``}>Reverse a string</h1>
            <p>Type a string to see how it looks like reversed</p> 
            <div className={`d-flex justify-content-center align-items-center`}>
              <input 
              className={`me-2`}
              type="text"
              onKeyUp={(e) => {
                setStr(e.target.value)
              }}
              />  
            <button className={`btn btn-secondary`} onClick={() => invert(str)}>Check</button>
            </div>
              <div className={`d-flex justify-content-center mt-3`}>
                <p> <strong>String invertida:</strong> {result} </p>
              </div>
            </div>
        </main>
      </div>
    )

}


