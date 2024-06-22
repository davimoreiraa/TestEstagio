import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className={`${styles.a} `}>
    <h1 className={`text-danger`}>Belongs to Fibonacci ?</h1>
    <p>Type a number to check if belongs to Fibonacci sequence</p>
    <input type="text" />
  </main>
);

export default root
