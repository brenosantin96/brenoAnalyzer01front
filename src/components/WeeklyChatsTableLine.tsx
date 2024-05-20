"use client"
import { Chat, ExpiredChatsConversationByTechnician } from '@/types/Chat';
import { getExpiredChatName } from '@/utils/ChatsFunctions';
import React, { useEffect } from 'react'

type Props = {
    isSmallScreen: boolean;
    expiredChatsConversationByTechnician: ExpiredChatsConversationByTechnician;
}

//let

const WeeklyChatsTableLine = ({ expiredChatsConversationByTechnician, isSmallScreen }: Props) => {


    const getChatsName = () => {
        let chatsName = getExpiredChatName(expiredChatsConversationByTechnician.expiredChats)
        return chatsName
    }


    return (
        <tr className='font-medium hover:bg-gray-100 hover:bg-opacity-50 transition-colors duration-200 cursor-pointer'>
            <td className=' border border-[#ABABAB] text-[#505153] p-1 md:p-2'>{expiredChatsConversationByTechnician.tecnico}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-1 md:p-2 text-center'>{expiredChatsConversationByTechnician.qtdeTotalChats}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-1 md:p-2 text-center'>{expiredChatsConversationByTechnician.qtdeexpiredChats}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-1 md:p-2 text-center'>{expiredChatsConversationByTechnician.expiredPorcentage > 0 ? `${expiredChatsConversationByTechnician.expiredPorcentage.toFixed(2)}%` : '-'}</td>
            {!isSmallScreen &&
                <td className={`border border-[#ABABAB] text-[#505153] p-1 md:p-2 text-center`}>{getChatsName()}</td>
            }
        </tr>
    )
}

export default WeeklyChatsTableLine