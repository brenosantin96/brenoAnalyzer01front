import React from 'react';
import Cell from './TableCell';

type RowProps = {
    rowData: string[];
    rowIndex: number;
    selectedCell: { row: number | null, col: number | null };
    setSelectedCell: (cell: { row: number | null, col: number | null }) => void;
    updateCell: (rowIndex: number, cellIndex: number, newValue: string) => void;
}

const TableRow = ({ rowData, rowIndex, selectedCell, setSelectedCell, updateCell }: RowProps) => {
  return (
    <div className='flex flex-row'>
      {rowData.map((cellData, cellIndex) => (
        <Cell
          key={cellIndex}
          value={cellData}
          isSelected={selectedCell.row === rowIndex && selectedCell.col === cellIndex}
          onClick={() => setSelectedCell({ row: rowIndex, col: cellIndex })}
          onChange={(newValue) => updateCell(rowIndex, cellIndex, newValue)}
        />
      ))}
    </div>
  );
};

export default TableRow;
