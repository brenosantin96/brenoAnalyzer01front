import { User } from "./User";

export type Inc_vs_ritm_text = {

    id : string;
    rowIndex : number;
    platform : string;
    casuistry: string;
    type_spanish: string;
    type_english: string;
    shortcut: string;
    kb_article: string;
    created_by: User;
    last_edition_by: User;
    created_at: Date;
    last_edited_at: Date;
    createdById: number;
    lastEditedById: number
    
  }