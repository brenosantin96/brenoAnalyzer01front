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


type SelectedCell = { row: number | null; col: number | null };

type PropsTable = {
  data_to_table: Inc_vs_ritm_text[];
  token: string | undefined;
  userLogged: User | undefined;
};

const Table = ({ data_to_table, token, userLogged }: PropsTable) => {


  const api = useApi(token);

  useEffect(() => {

    console.log(userLogged)
    console.log("userLogged?.id", userLogged?.id)
    console.log("userLogged?.name", userLogged?.name)

  }, [userLogged])

  const convertDataToTableData = (data: Inc_vs_ritm_text[]): string[][] => {
    return data.map((item) => [
      item.platform, //0
      item.casuistry, //1
      item.type_spanish, //2
      item.type_english, //3
      item.shortcut, //4
      item.kb_article, //5
      item.id, //6,
      item.createdById.toString(), //7
      item.lastEditedById.toString(), //8
      item.created_at.toString(), //9
      item.last_edited_at.toString(), //10

    ]);
  };

  const convertStringsToIncVsRitmText = (data: string[][]): Inc_vs_ritm_text[] => {
    return data.map((item, index) => ({
      id: `${index}`, // Gerando um ID simples, pode ajustar conforme necessário
      rowIndex: index,
      platform: item[0],
      casuistry: item[1],
      type_spanish: item[2],
      type_english: item[3],
      shortcut: item[4],
      kb_article: item[5],
      created_by: {} as User, // Pode ajustar conforme a lógica de criação de usuários
      last_edition_by: {} as User,
      created_at: new Date(),
      last_edited_at: new Date(),
      createdById: 0, // Defina conforme a lógica do projeto
      lastEditedById: 0
    }));
  };


  const initialTableData = convertDataToTableData(data_to_table);

  const [tableData, setTableData] = useState<string[][]>(initialTableData);
  const [selectedCell, setSelectedCell] = useState<SelectedCell>({ row: null, col: null });
  const [cellIsBeingEditted, setCellIsBeingEddited] = useState(false);


  //assegurar para nao editar sempre no banco a cada letra modificada.
  useEffect(() => {

    if(cellIsBeingEditted){

    }
    if (!cellIsBeingEditted) {

    }

  }, [cellIsBeingEditted])

 
  //getting info of what cell have been editted
  const updateCell = async (rowIndex: number, cellIndex: number, newValue: string) => {

    const newTableData = [...tableData];
    newTableData[rowIndex][cellIndex] = newValue;


    if (cellIsBeingEditted) {
      setTableData(newTableData);
    }

    if (!cellIsBeingEditted) {

      let saved_Row_Inc_Vs_Ritm_Text = await api.edit_Inc_Vs_Ritm_Texts(
        newTableData[rowIndex][6],
        newTableData[rowIndex][0],
        newTableData[rowIndex][1],
        newTableData[rowIndex][2],
        newTableData[rowIndex][3],
        newTableData[rowIndex][4],
        newTableData[rowIndex][5],
        parseInt(newTableData[rowIndex][7]),
        parseInt(newTableData[rowIndex][8])

      )

    }


  };

  const handleEditingChangeProp = (isEditing: boolean) => {

    if (selectedCell && isEditing) {
      setCellIsBeingEddited(true);
      console.log("Esta sendo editado e esta selecionado: ", isEditing, selectedCell)
    }
    else {
      setCellIsBeingEddited(false)
    }
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

  const addLineToTable = async () => {

    if (userLogged) {
      const newLine = ["", "", "", "", "", ""];
      const newTableData = [...tableData, newLine];

      console.log("authContext.user.id: ", userLogged.id)
      console.log("authContext.user.name", userLogged.name)


      const newLineAddedDatabase = await api.create_Inc_Vs_Ritm_Texts(newLine[0], newLine[1]
        , newLine[2], newLine[3], newLine[4], newLine[5], userLogged.id, userLogged.id)

      console.log("newLineAddedDatabase: ", newLineAddedDatabase)

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
    <div onKeyUp={() => controlKeypadMovement}>
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
      </div>
    </div>
  );
};

export default Table;
