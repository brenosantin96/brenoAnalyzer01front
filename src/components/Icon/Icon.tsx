import React from 'react'
import FileSVG from './FileSVG'
import MenuSVG from './MenuSVG'
import CloseSVG from './CloseSVG'
//import { SVGperson } from './SVGperson'

type Props = {
    svg: string;
    width: string;
    height: string;
    fillColor?: string;
    strokeColor?: string;
    classNam?: string;
}


export const Icon = ({ svg, width, height, fillColor, strokeColor, classNam }: Props) => {
    return (
        <div className={`pr-3 ${classNam}`}>
            {svg === "fileTopNavBar" && <FileSVG height={height} width={width} />}
            {svg === "menu" && <MenuSVG height={height} width={width} />}
            {svg === "close" && <CloseSVG height={height} width={width} />}
        </div>
    )
}
