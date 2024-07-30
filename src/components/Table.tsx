import React, { useState } from 'react';
import Row from './TableRow';
import { columnWidths } from '@/utils/TableTextsUtils';

type SelectedCell = { row: number | null, col: number | null };

const Table = () => {

  const initialData = [
    ['Cuenta usuario', 'Accesos usuarios nuevos (Interno)', 'Texto....', 'Texto....', '//notiene', ''],
    ['Cuenta usuario', 'Accesos usuarios nuevos (Interno)', 'Texto....', 'Texto....', '//notiene', ''],
    ['Cuenta usuario', 'Accesos usuarios nuevos (Interno)', 'Texto....', 'Texto....', '//notiene', ''],
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


  

  //Evento de controle do teclado
  const controlKeypadMovement = (arrowKey : KeyboardEvent) => {
    
    if(arrowKey.key === "up"){
      
    }
    if(arrowKey.key === "right"){
      
    }
    if(arrowKey.key === "down"){
      
    }
    if(arrowKey.key === "left"){
      
    }
    

  }



  return (
    <div className='bg-[#C2D1DF] overflow-y-hidden' onKeyUp={() => controlKeypadMovement}>

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

        <div className='flex justify-start h-[80px] flex-row w-max text-[22px] text-left gap-0 font-arial font-bold text-white'>
          <div className={`min-w-[154px] pl-2 flex items-center text-left border border-gray-400  bg-[#A5A5A5]`}>Plataforma</div>
          <div className='min-w-[190px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5]'>Casuística</div>
          <div className='min-w-[810px] pl-2 flex items-center text-left border-gray-400 bg-[#A5A5A5]'>Texto Tipo ESP</div>
          <div className='min-w-[810px] pl-2 flex items-center text-left border-gray-400 bg-[#A5A5A5]'>Texto Tipo ENG</div>
          <div className='min-w-[330px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5] font-golos font-bold'>Shortcut</div>
          <div className='min-w-[154px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5]'>KB Tecnico</div>
        </div>


        {tableData.map((rowData, rowIndex) => (
          <Row
            evenOrOddColor={rowIndex % 2 === 0 ? 0 : 1}
            textColor={`text-white`}
            fontSize={`text-[22px]`}
            fontWeight={`font-bold`}
            lineHeight={`h-[80px]`}
            key={rowIndex}
            rowData={rowData}
            rowIndex={rowIndex}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            updateCell={updateCell}
            widths={columnWidths}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
