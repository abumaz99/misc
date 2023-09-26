import React from 'react';

function TotalTable({ cost }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Total Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cost}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TotalTable;
