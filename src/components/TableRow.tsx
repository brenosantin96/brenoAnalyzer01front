import React from 'react';
import Cell from './TableCell';

type RowProps = {
  rowData: string[];
  rowIndex: number;
  selectedCell: { row: number | null, col: number | null };
  setSelectedCell: (cell: { row: number | null, col: number | null }) => void;
  updateCell: (rowIndex: number, cellIndex: number, newValue: string) => void;
  onEditingChange: (isEditing: boolean) => void;
  textColor: string;
  fontSize: string;
  fontWeight?: string;
  widths: string[];
  lineHeight?: string;
  evenOrOddColor: 0 | 1;
}

const TableRow = ({
  rowData, rowIndex, selectedCell, setSelectedCell, updateCell,
  textColor, fontSize, fontWeight, widths, lineHeight, evenOrOddColor, onEditingChange
}: RowProps) => {
  
  const handleSelectCell = (cellIndex: number) => {
    setSelectedCell({ row: rowIndex, col: cellIndex });
  };

  const handleEditingChange = (isEditing: boolean) => {
    onEditingChange(isEditing);
  };

  return (
    <div className={`flex flex-row ${lineHeight} ${textColor} ${fontSize} ${fontWeight}`}>
      {rowData.map((cellData, cellIndex) => (
        <Cell
          evenOrOddColor={evenOrOddColor}
          bgColor={`bg-grey-table`}
          fontSize={`text-xs`}
          key={cellIndex}
          keyIndex={cellIndex}
          value={cellData}
          isSelected={selectedCell.row === rowIndex && selectedCell.col === cellIndex}
          onClick={() => handleSelectCell(cellIndex)} 
          onChange={(newValue) => updateCell(rowIndex, cellIndex, newValue)}
          onEditingChange={(isEditing) => handleEditingChange(isEditing)}
          width={widths[cellIndex]}
        />
      ))}
    </div>
  );
};

export default TableRow;
