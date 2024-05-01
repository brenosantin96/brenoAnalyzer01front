import { Chat, ChatsConversationByTechnician } from "@/types/Chat";

export const getAllChatsByTechnician = (chats : Chat[]) => {

    let chatConversationsByTechnician : ChatsConversationByTechnician[] = [];

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

    return chatConversationsByTechnician

}