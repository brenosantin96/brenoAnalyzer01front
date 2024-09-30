import { Inc_vs_ritm_text } from "@/types/Inc_vs_ritm_text_type";
import { User } from "@/types/User";

export const convertDataToTableData = (data: Inc_vs_ritm_text[]): string[][] => {
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
      //item.created_at.toString(), //9
      //item.last_edited_at.toString(), //10
    ]);
  };

export const convertStringsToIncVsRitmText = (data: string[][]): Inc_vs_ritm_text[] => {
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


/*   export const convertDataToTableData = (data: Inc_vs_ritm_text[]): string[][] => {
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
  }; */