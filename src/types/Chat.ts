export type Chat = {
    creado: Date,
    tarea: string,
    asignadoa: string,
    porcentajedenegociotrascurrido: number

}

export type ChatsConversationByTechnician = {
    tecnico: string,
    qtde: number;
    chats: Chat[];
}

export type ExpiredChatsConversationByTechnician = {
    tecnico: string,
    qtdeTotalChats: number;
    qtdeexpiredChats: number;
    expiredPorcentage: number;
    expiredChats: Chat[]

}

