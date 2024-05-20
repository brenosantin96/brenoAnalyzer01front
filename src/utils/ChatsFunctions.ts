import { Chat, ChatsConversationByTechnician, ExpiredChatsConversationByTechnician } from "@/types/Chat";

export const getAllChatsByTechnician = (chats: Chat[]) => {

    let chatConversationsByTechnician: ChatsConversationByTechnician[] = [];

    chats.forEach(item => {

        const index = chatConversationsByTechnician.findIndex((element) => element.tecnico === item.asignadoa);

        if (index !== -1) {
            chatConversationsByTechnician[index].chats.push(item)
            chatConversationsByTechnician[index].qtde++;

        } else {
            chatConversationsByTechnician.push({
                tecnico: item.asignadoa,
                chats: [item],
                qtde: 1
            })
        }

    });

    let expiredChats: ExpiredChatsConversationByTechnician[] = []

    chatConversationsByTechnician.forEach((item) => {

        expiredChats.push({
            tecnico: item.tecnico,
            qtdeTotalChats: item.qtde,
            expiredChats: item.chats.filter((element) => element.porcentajedenegociotrascurrido > 99.99),
            expiredPorcentage: getExpiredPorcent(item.chats.length, item.chats.filter((element) => element.porcentajedenegociotrascurrido > 99.99)),
            qtdeexpiredChats: item.chats.filter((element) => element.porcentajedenegociotrascurrido > 99.99).length
        })

    })

    return expiredChats;

}


export const getExpiredPorcent = (totalChats: number, expiredChats: Chat[]) => {

    let x = (expiredChats.length / totalChats) * 100
    return x;
}

export const getExpiredChatName = (chats: Chat[]) => {

    let chatsName: string[] = []

    chats.forEach((item) => chatsName.push(item.tarea))

    return addSpaceAfterComma(chatsName.toString());

}

export function addSpaceAfterComma(input: string): string {
    // Divide a string em partes com base nas vírgulas
    const parts = input.split(',');

    // Mapeia sobre as partes e adiciona um espaço após cada uma
    const result = parts.map(part => part.trim()).join(', ');

    return result;
}


export const getQuantityAllExpiredChats = (chats: Chat[]) => {

    let counter = 0

    chats.forEach(item => {

        if (item.porcentajedenegociotrascurrido > 99.99) {
            counter++;
        }

    });

    return counter;

}

//% = (40 ÷ 50) x 100