"use client";
import React, { useEffect, useState } from "react";
import Row from "./TableRow";
import { columnWidths } from "@/utils/TableTextsUtils";
import { Icon } from "./Icon/Icon";
import { Inc_vs_ritm_text } from "@/types/Inc_vs_ritm_text_type";
import { useAuthContext } from "@/contexts/Auth/AuthContext";
import { User } from "@/types/User";
import { v4 as uuidv4 } from 'uuid';
import { useApi } from "@/api/api";
import { RightClickContextMenuTable } from "./RightClickContextMenuTable";
import { convertDataToTableData } from "@/utils/ConvertDataToTableData";


type SelectedCell = { row: number | null; col: number | null };

type PropsTable = {
  all_data_table: Inc_vs_ritm_text[];
  filtered_data_to_table: Inc_vs_ritm_text[];
  token: string | undefined;
  userLogged: User | undefined;
};

const Table = ({ filtered_data_to_table, all_data_table, token, userLogged }: PropsTable) => {


  const api = useApi(token);

  const initialTableData = convertDataToTableData(filtered_data_to_table);

  const [tableData, setTableData] = useState<string[][]>(initialTableData);

  const [selectedCell, setSelectedCell] = useState<SelectedCell>({ row: null, col: null });

  //check if any cell is being editted.
  const [cellIsBeingEditted, setCellIsBeingEddited] = useState(false);

  //context Menu
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);


  useEffect(() => {
      handleCloseMenu()  
      console.log(initialTableData)   
  }, [cellIsBeingEditted, selectedCell])

  const handleRightClick = (e: React.MouseEvent) => {

    if (selectedCell.col !== null && selectedCell.row !== null) {
      e.preventDefault();
      setContextMenu({ x: e.pageX, y: e.pageY });
    }
  };

  const handleCloseMenu = () => {
    setContextMenu(null);
  };


 //USE EFFECT to control if cell is being editted to allow save in database
useEffect(() => {
  if (!cellIsBeingEditted && selectedCell.row !== null && selectedCell.col !== null) {
    const rowIndex = selectedCell.row;
    const cellIndex = selectedCell.col;

    // Realize o salvamento aqui com os dados atualizados
    const saveCellData = async () => {
      try {
        //TROCAR para ser o campo shortCUT e shortcut vai ter que ser UNICO
        // Busca o item correspondente no all_data_table com base no campo english_type
        const correspondingItem = all_data_table.find(
          (item) => item.type_english === tableData[rowIndex][3]
        );

        if (correspondingItem) {
          const saved_Row_Inc_Vs_Ritm_Text = await api.edit_Inc_Vs_Ritm_Texts(
            correspondingItem.id, // O ID encontrado
            tableData[rowIndex][0], // platform
            tableData[rowIndex][1], // casuistic
            tableData[rowIndex][2], // spanish type
            tableData[rowIndex][3], // english type
            tableData[rowIndex][4], // shortcut
            tableData[rowIndex][5], // kb article
            correspondingItem.createdById, // createdBy
            correspondingItem.lastEditedById  // lastEditedBy
          );

          console.log("Dados salvos com sucesso:", saved_Row_Inc_Vs_Ritm_Text);
        } else {
          console.error("Item correspondente não encontrado no all_data_table");
        }
      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
      }
    };

    // Chama a função de salvar
    saveCellData();
  }
}, [cellIsBeingEditted]);



  //getting info of what cell have been editted
  const updateCell = async (rowIndex: number, cellIndex: number, newValue: string) => {

    //locally updating table.
    const newTableData = [...tableData];
    newTableData[rowIndex][cellIndex] = newValue;

    //updating local status of table
    setTableData(newTableData);

  };

  const handleEditingChangeProp = (isEditing: boolean) => {

    if (selectedCell && isEditing) {
      setCellIsBeingEddited(true);
    }

    if (selectedCell && !isEditing) {
      setCellIsBeingEddited(false);
    }

  };

  //function to delete ROW
  const deleteIncVsRITMText = async () => {

    console.log("Deletando Linha...")
  }

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

  const addLineToTable = async () => {

    if (userLogged) {
      const newLine = ["", "", "", "", "", ""];
      const newTableData = [...tableData, newLine];

      const newLineAddedDatabase = await api.create_Inc_Vs_Ritm_Texts(newLine[0], newLine[1]
        , newLine[2], newLine[3], newLine[4], newLine[5], userLogged.id, userLogged.id)

      if (newLineAddedDatabase) {
        setTableData(newTableData);

      }

    }

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
    <div onContextMenu={handleRightClick} onKeyUp={() => controlKeypadMovement}>
      <div className="mt-[75px]">
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

      <div className="pl-2 text-[#5A5A5A] whitespace-nowrap">
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
            onEditingChange={(isEditing) => handleEditingChangeProp(isEditing)}
            updateCell={updateCell}
            widths={columnWidths}
          />
        ))}

        <div onClick={addLineToTable} className="pl-2 py-2 max-w-20 flex justify-center items-center bg-red-300">
          <Icon svg="plusIcon" height="40px" width="40px" fillColor="#A0A0A0" />
        </div>

        {contextMenu && (
          <RightClickContextMenuTable x={contextMenu.x} y={contextMenu.y} onClose={handleCloseMenu} />
        )}

      </div>
    </div>
  );
};

export default Table;
