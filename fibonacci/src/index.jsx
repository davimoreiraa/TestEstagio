/* ------------------  STYLES -------------------*/
import styles from './index.css';

/* ------------------  RESOURCES -------------------*/
import React from 'react';
// import { useState } from 'react';


export default function index() {
    // const [num, setNum] = useState('')
    
    return (
      <main className={`${styles.a} d-flex justify-content-center align-items-center`}>
        <div className={``}>
          <h1 className={``}>Belongs to Fibonacci ?</h1>
          <p>Type a number to check if belongs to Fibonacci sequence</p>
          <input type="text" />
        </div>
      </main>

    )

}


