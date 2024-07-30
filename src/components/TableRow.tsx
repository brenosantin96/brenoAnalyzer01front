import React, { useEffect } from 'react';
import Cell from './TableCell';

type RowProps = {
  rowData: string[]; // todo conteudo da linha
  rowIndex: number; //indice da linha
  selectedCell: { row: number | null, col: number | null }; //celula selecionada 
  setSelectedCell: (cell: { row: number | null, col: number | null }) => void; //redefinindo a celula selecionada
  updateCell: (rowIndex: number, cellIndex: number, newValue: string) => void; //atualizando celula
  textColor: string;
  fontSize: string;
  fontWeight?: string;
  widths: string[];
  lineHeight: string;
  evenOrOddColor: 0 | 1;
}

const TableRow = ({ rowData, rowIndex, selectedCell, setSelectedCell, updateCell, textColor, fontSize, fontWeight, widths, lineHeight, evenOrOddColor }: RowProps) => {


  useEffect(() => {
    console.log("rowData", rowData)
  }, [rowData])

  useEffect(() => {
    console.log("evenOrOddColor ROW", evenOrOddColor)
  }, [rowData])


  return (
    <div className={`flex flex-row ${lineHeight} ${textColor} ${fontSize} ${fontWeight}`}>

      {rowData.map((cellData, cellIndex) => (
        <Cell
          evenOrOddColor={evenOrOddColor}
          bgColor={`bg-grey-table`}
          fontSize={`text-xs`}
          key={cellIndex}
          value={cellData}
          isSelected={selectedCell.row === rowIndex && selectedCell.col === cellIndex}
          onClick={() => setSelectedCell({ row: rowIndex, col: cellIndex })}
          onChange={(newValue) => updateCell(rowIndex, cellIndex, newValue)}
          width={widths[cellIndex]}
        />
      ))}

    </div>
  );
};

export default TableRow;
