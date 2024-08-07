import React from 'react'
import FileSVG from './FileSVG'
import MenuSVG from './MenuSVG'
import CloseSVG from './CloseSVG'
import LoginSVG from './LoginSVG'
import { SVGPassword } from './SVGPassword'
import { SVGperson } from './SVGperson'
import LogoutSVG from './LogoutSVG'
import { PlusIconSVG } from './PlusIconSVG'

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
            {svg === "login" && <LoginSVG height={height} width={width} fillColor={fillColor} />}
            {svg === "logout" && <LogoutSVG height={height} width={width} fillColor={fillColor} />}
            {svg === "key" && <SVGPassword height={height} width={width} />}
            {svg === "person" && <SVGperson height={height} width={width} />}
            {svg === "plusIcon" && <PlusIconSVG height={height} width={width} fillColor={fillColor} />}
        </div>
    )
}
