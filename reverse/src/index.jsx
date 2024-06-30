/* ------------------  STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------  RESOURCES -------------------*/
import React, { useState } from 'react';

export default function Index() {
  const [str, setStr] = useState('')
  var [reve, setReve] = useState([])
  var [inverted, setInverted] = useState([])
  var [lastChar, setLastChar] = useState('')
  var [result, setResult] = useState('')
    
  function invert(string) {
    setInverted([])
    reve = string.split('')
    
    while(reve.length !== 0) {
      lastChar = reve[reve.length -1]
      result = result + lastChar
      reve = reve.slice(0, -1)
    }
    
    console.log(result)
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
              {reve}
            </div>
            </div>
        </main>
      </div>
    )

}


