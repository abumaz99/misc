import React, { useState, useRef } from 'react';
import Table from './components/Table';
import TotalTable from './components/TotalTable';

function App() {
  const [totalCost, setTotalCost] = useState(0);
  const table1Ref = useRef();
  const table2Ref = useRef();

  const handleSubmit = () => {
    const table1Cost = table1Ref.current.getTotalCost();
    const table2Cost = table2Ref.current.getTotalCost();
    setTotalCost(table1Cost + table2Cost);
  };

  const reset = () => {
    // Logic to reset the tables and total cost
    setTotalCost(0);
    // If needed, you can also reset tables. This would require additional logic in the Table component.
  };

  return (
    <div className="App">
      <Table ref={table1Ref} />
      <Table ref={table2Ref} />
      <button onClick={handleSubmit}>Submit</button>
      <TotalTable cost={totalCost} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

