import React, { useState } from 'react';
import Row from './TableRow';

type SelectedCell = { row: number | null, col: number | null };

const Table = () => {
  const initialData = [
    ['Plataforma', 'Casuística', 'Texto Tipo ESP', 'Texto Tipo ENG', 'Shortcut', 'KB Tecnico'],
    ['Cuenta usuario', 'Accesos usuarios nuevos (Interno)', 'Texto....', 'Texto....', '//notiene', ''],
    ['Cuenta usuario', 'Accesos usuarios nuevos (Interno)', 'Texto....', 'Texto....', '//notiene', ''],
    // Adicione mais linhas conforme necessário
  ];

  const [tableData, setTableData] = useState<string[][]>(initialData);
  const [selectedCell, setSelectedCell] = useState<SelectedCell>({ row: null, col: null });

  const updateCell = (rowIndex: number, cellIndex: number, newValue: string) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][cellIndex] = newValue;
    setTableData(newTableData);
  };

  return (
    <div className='bg-[#C2D1DF] overflow-y-hidden'>
      <div className='mt-[75px] bg-[#C2D1DF] overflow-y-hidden'>
        <ul className='ml-2 flex gap-4 font-bold text-[#5A5A5A] '>
          <li>
            <a className='hover:text-[#006989]' href="#">Pte. conf. usuario</a>
          </li>
          <li>
            <a className='hover:text-[#006989]' href="#">INC vs RITM</a>
          </li>
          <li>
            <a className='hover:text-[#006989]' href="#">TEMP</a>
          </li>
        </ul>
      </div>

      <div className='pl-2 bg-[#C2D1DF] text-[#5A5A5A] h-screen overflow-x-scroll overflow-y-hidden whitespace-nowrap'>
        {tableData.map((rowData, rowIndex) => (
          <Row
            key={rowIndex}
            rowData={rowData}
            rowIndex={rowIndex}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            updateCell={updateCell}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
