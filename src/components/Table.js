import React, { useState, useRef } from 'react';
import TableRow from './TableRow';

const Table = ({ forwardedRef }) => {
  const [rowValues, setRowValues] = useState([]);
  const shirtValues = {'S': 1, 'M': 2, 'L': 3};
  const branchValues = {'A': 4, 'B': 5, 'C': 6};

  const handleAddRow = () => {
    setRowValues((prevValues) => [...prevValues, { shirtSize: 'S', branch: 'A' }]);
  };

  const handleRowValueChange = (index, shirt, branch) => {
    const updatedValues = [...rowValues];
    updatedValues[index] = { shirtSize: shirt, branch: branch };
    setRowValues(updatedValues);
  };

  const getTotalCost = () => {
    return rowValues.reduce((acc, row) => {
      return acc + shirtValues[row.shirtSize] + branchValues[row.branch];
    }, 0);
  };

  if (forwardedRef) {
    forwardedRef.current = {
      getTotalCost: getTotalCost
    };
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>T-shirt</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {rowValues.map((row, index) => (
            <TableRow
              key={index}
              onValuesChange={(shirt, branch) => handleRowValueChange(index, shirt, branch)}
            />
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

const TableWithRef = React.forwardRef((props, ref) => (
  <Table forwardedRef={ref} {...props} />
));

export default TableWithRef;
