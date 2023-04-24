import React, { useCallback, useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0)

  const [historique, setHistorique] = useState([])

  const histoCounter = useCallback((newCount) => {
    setHistorique(...historique, counter)
    setCounter(newCount)
  },[counter, historique])

  return (
    <div>
      {counter}
      <button onClick={() => histoCounter(counter - 1)}>-</button>
      <button onClick={() => histoCounter(counter + 1)}>+</button>
      <br />
      {historique.map((histo,index) => <div key={index}>Valeur{histo}</div>)}
    </div>
  );
}

export default Counter;