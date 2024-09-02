"use client";
import React, { useEffect, useState } from "react";
import Row from "./TableRow";
import { columnWidths } from "@/utils/TableTextsUtils";
import { Icon } from "./Icon/Icon";
import { Inc_vs_ritm_text } from "@/types/Inc_vs_ritm_text_type";
import { useAuthContext } from "@/contexts/Auth/AuthContext";
import { User } from "@/types/User";
import { v4 as uuidv4 } from 'uuid';


type SelectedCell = { row: number | null; col: number | null };

type PropsTable = {
  data_to_table: Inc_vs_ritm_text[];
};

const Table = ({ data_to_table }: PropsTable) => {


  const authContext = useAuthContext();

  
  const convertDataToTableData = (data: Inc_vs_ritm_text[]): string[][] => {
    return data.map((item) => [
      item.platform,
      item.casuistry,
      item.type_spanish,
      item.type_english,
      item.shortcut,
      item.kb_article,
    ]);
  };

  const convertTableDataToData = (dataTable: string[][]): Inc_vs_ritm_text[] => {
    return dataTable.map((row, index) => ({ //row is same as item.
      id: uuidv4(), 
      rowIndex: index,
      platform: row[0],
    
      casuistry: row[1],
      type_spanish: row[2],
      type_english: row[3],
      shortcut: row[4],
      kb_article: row[5],
      created_by: authContext.user as User, // adicionar valores de User
      last_edition_by: authContext.user as User, // adicionar valores de User
      created_at: new Date(),
      last_edited_at: new Date(),
      createdById: 1,
      lastEditedById: 1,
    }));
  };


  const initialTableData = convertDataToTableData(data_to_table);

  const [tableData, setTableData] = useState<string[][]>(initialTableData);
  const [selectedCell, setSelectedCell] = useState<SelectedCell>({ row: null, col: null });

  const updateCell = (rowIndex: number, cellIndex: number, newValue: string) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][cellIndex] = newValue;
    setTableData(newTableData);
  };

  const controlKeypadMovement = (event: KeyboardEvent) => {
    let newSelectedCell = { ...selectedCell };

    switch (event.key) {
      case "ArrowUp":
        if (selectedCell.row! > 0) {
          newSelectedCell.row = selectedCell.row! - 1;
        }
        break;
      case "ArrowDown":
        if (selectedCell.row! < tableData.length - 1) {
          newSelectedCell.row = selectedCell.row! + 1;
        }
        break;
      case "ArrowLeft":
        if (selectedCell.col! > 0) {
          newSelectedCell.col = selectedCell.col! - 1;
        }
        break;
      case "ArrowRight":
        if (selectedCell.col! < tableData[0].length - 1) {
          newSelectedCell.col = selectedCell.col! + 1;
        }
        break;
      default:
        break;
    }

    setSelectedCell(newSelectedCell);
  };

  const addLineToTable = () => {
    const newLine = ["", "", "", "", "", ""];
    const newTableData = [...tableData, newLine];
    setTableData(newTableData);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      controlKeypadMovement(event);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCell]);

  return (
    <div className="bg-[#C2D1DF]" onKeyUp={() => controlKeypadMovement}>
      <div className="mt-[75px] bg-[#C2D1DF]">
        <ul className="ml-2 flex gap-4 font-bold text-[#5A5A5A] ">
          <li>
            <a className="hover:text-[#006989]" href="#">
              Pte. conf. usuario
            </a>
          </li>
          <li>
            <a className="hover:text-[#006989]" href="#">
              INC vs RITM
            </a>
          </li>
          <li>
            <a className="hover:text-[#006989]" href="#">
              TEMP
            </a>
          </li>
        </ul>
      </div>

      <div className="pl-2 bg-[#C2D1DF] text-[#5A5A5A] whitespace-nowrap">
        <div className="flex justify-start h-[80px] flex-row w-max text-[22px] text-left gap-0 font-arial font-bold text-white">
          <div
            className={`min-w-[154px] pl-2 flex items-center text-left border border-gray-400  bg-[#A5A5A5]`}
          >
            Plataforma
          </div>
          <div className="min-w-[190px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5]">
            Casuística
          </div>
          <div className="min-w-[810px] pl-2 flex items-center text-left border-gray-400 bg-[#A5A5A5]">
            Texto Tipo ESP
          </div>
          <div className="min-w-[810px] pl-2 flex items-center text-left border-gray-400 bg-[#A5A5A5]">
            Texto Tipo ENG
          </div>
          <div className="min-w-[330px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5] font-golos font-bold">
            Shortcut
          </div>
          <div className="min-w-[154px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5]">
            KB Tecnico
          </div>
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

        <div onClick={addLineToTable} className="pl-2 py-2 max-w-20 flex justify-center items-center bg-red-300">
          <Icon svg="plusIcon" height="40px" width="40px" fillColor="#A0A0A0" />
        </div>
      </div>
    </div>
  );
};

export default Table;
