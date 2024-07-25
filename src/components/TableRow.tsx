import React from 'react';
import Cell from './TableCell';

type RowProps = {
    rowData: string[]; // todo conteudo da linha
    rowIndex: number; //indice da linha
    selectedCell: { row: number | null, col: number | null }; //celula selecionada 
    setSelectedCell: (cell: { row: number | null, col: number | null }) => void; //redefinindo a celula selecionada
    updateCell: (rowIndex: number, cellIndex: number, newValue: string) => void; //atualizando celula
    bgColor : string;
    textColor: string;
}

const TableRow = ({ rowData, rowIndex, selectedCell, setSelectedCell, updateCell, bgColor, textColor }: RowProps) => {
  return (
    <div className={`flex flex-row ${bgColor} ${textColor}`}>

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
