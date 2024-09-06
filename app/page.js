"use client"

import { Button, StatBox, Title, Input } from "../components";
import { useState, useCallback } from "react";

export default function Home() {
  // Set page state variables
  const [numOne, setNumOne] = useState(0)
  const [numTwo, setNumTwo] = useState(0)
  const [total, setTotal] = useState(0)

  // Set page state handlers
  const onNumOneChange = (event) => {setNumOne(event.target.value)}
  const onNumTwoChange = (event) => {setNumTwo(event.target.value)}
  const calculateTotal = useCallback(() => {setTotal(Number(numOne) + Number(numTwo))}, [numOne, numTwo])

  // Define page layout
  return (
    <div>
      <h1>
        The result is: {total}
      </h1>
      <div>
        <input style={styles.input} onChange={onNumOneChange} value={numOne} />
        <br />
        <br />
        <input style={styles.input} onChange={onNumTwoChange} value={numTwo} />
        <br />
        <br />
        <Button onClick={calculateTotal}>Calculate</Button>
      </div>
    </div>
  );
}

const styles = {
  btn: {},
  input: { width: 100, color: 'grey', borderColor: 'red', borderWidth: 1, borderRadius: 10 }
}