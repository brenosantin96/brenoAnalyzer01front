"use client"
import { Chat, ChatsConversationByTechnician, ExpiredChatsConversationByTechnician } from '@/types/Chat';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import WeeklyChatsTableLine from './WeeklyChatsTableLine';
import { getAllChatsByTechnician } from '@/utils/ChatsFunctions';
import { es } from 'date-fns/locale'
import {format} from 'date-fns'



type Props = {

    allChatsConversations: Chat[]

}

const WeeklyChatsTable = ({ allChatsConversations }: Props) => {


    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [chatsByTechnician, setChatsByTechnician] = useState<ExpiredChatsConversationByTechnician[]>([])


    useEffect(() => {
        const handleResize = () => { setIsSmallScreen(window.innerWidth <= 640); };

        // Adiciona o listener para mudanças de tamanho de tela
        window.addEventListener('resize', handleResize);

        // Define o estado inicial baseado no tamanho da tela na inicialização
        setIsSmallScreen(window.innerWidth <= 640);

        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        console.log("allChatsConversations", allChatsConversations)
        let expiredChatsByTechnician = getAllChatsByTechnician(allChatsConversations)
        let sortedChatsByTechnician = expiredChatsByTechnician.sort((a, b) => b.qtdeexpiredChats - a.qtdeexpiredChats)
        setChatsByTechnician(sortedChatsByTechnician);
        console.log("expiredChatsByTechnician", sortedChatsByTechnician)
    }, [allChatsConversations])


    const getChatConversationInitialDate = (chats: Chat[]) => {
       const stringInitialDate = allChatsConversations[0].creado;
       const formattedStringInitialDate = format(stringInitialDate, 'dd/MMMM/yyyy', {locale: es})
       return formattedStringInitialDate; 
    }

    const getChatConversationFinalDate = (chats: Chat[]) => {
        const stringInitialDate = allChatsConversations[allChatsConversations.length - 1].creado
        const formattedStringFinalDate = format(stringInitialDate, 'dd/MMMM/yyyy', {locale: es})
        return formattedStringFinalDate; 
     }



    return (

        <table className="border-spacing-1 table-auto bg-[#D9D9D9] border-2">
            <thead className='text-center'>

                <tr className='text-center p-2 w-full'>
                    <td colSpan={isSmallScreen ? 4 : 5} className='text-xl font-medium p-3 '>{isSmallScreen ? 
                    `Chats ${getChatConversationInitialDate(allChatsConversations)} a ${getChatConversationFinalDate(allChatsConversations)}` : 
                    `Chats ${getChatConversationInitialDate(allChatsConversations)} a ${getChatConversationFinalDate(allChatsConversations)}`}
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    {!isSmallScreen &&
                        <td></td>
                    }
                </tr>

                <tr className='font-medium text-center'>
                    <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-2'>{isSmallScreen ? 'Tec.' : 'Técnico'}</td>
                    <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-2'>{isSmallScreen ? 'Qtd.' : 'Qtde Chats'}</td>
                    <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-2'>{isSmallScreen ? 'Cad.' : 'Qtde Caducados'}</td>
                    <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-2'>{isSmallScreen ? '% Cad.' : '% Caducados'}</td>
                    {!isSmallScreen &&
                        <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-2'>{isSmallScreen ? 'Cad.' : 'Caducados'}</td>

                    }
                </tr>
            </thead>
            <tbody>

                {chatsByTechnician && chatsByTechnician.length > 0 && chatsByTechnician.map((item) => (
                    <WeeklyChatsTableLine expiredChatsConversationByTechnician={item} isSmallScreen={isSmallScreen} key={item.tecnico} />
                ))}

            </tbody>
        </table>

    )
}

export default WeeklyChatsTable

/* {incidents.map((item) => (
    <IncidentItemLineTable key={item.numero} incident={item} />
))} */