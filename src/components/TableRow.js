import React, { useState } from 'react';

function TableRow({ onValuesChange }) {
  const [shirtSize, setShirtSize] = useState('S');
  const [branch, setBranch] = useState('A');

  const handleShirtSizeChange = (e) => {
    setShirtSize(e.target.value);
    onValuesChange(e.target.value, branch);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    onValuesChange(shirtSize, e.target.value);
  };

  return (
    <tr>
      <td>
        <select value={shirtSize} onChange={handleShirtSizeChange}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </td>
      <td>
        <select value={branch} onChange={handleBranchChange}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </td>
    </tr>
  );
}

export default TableRow;




  