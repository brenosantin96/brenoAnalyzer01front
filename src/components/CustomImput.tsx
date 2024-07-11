"use client"

import React, { ChangeEvent, useState } from 'react'
import { Icon } from './Icon/Icon';

type Props = {
    svg: string,
    widthSVG: string,
    heightSVG: string,
    typeInput: "text" | "password";
    textPlaceholder: string;
    onChangeInput : (newText : string) => void;
    value?: string,
    fillColorSVG?: string;
    strokeColorSVG?: string;
    placeholderColor?: string; // Adicionado para permitir customização da cor do placeholder

}

export const CustomImput = ({ svg, widthSVG, heightSVG, textPlaceholder, typeInput, fillColorSVG, strokeColorSVG, value, onChangeInput, placeholderColor }: Props) => {


    return (
        <div className={`flex p-4 border text-ice-dark-blue border-ice-dark-blue rounded-md`}>
            <div>
                <Icon svg={svg} width={widthSVG} height={heightSVG} />
            </div>
            <input type={typeInput} value={value} onChange={(e)=> onChangeInput(e.target.value)} className={`h-7 text-xl p-4 border-0 outline-0 bg-transparent ${placeholderColor}`} placeholder={textPlaceholder}
            />
        </div>
    )
}
