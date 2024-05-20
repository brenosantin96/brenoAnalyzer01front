import React from 'react'

type Props = {
    width: string;
    height: string;
    fillColor?: string;
    strokeColor?: string;
}

const MenuSVG = ({ width, height, fillColor, strokeColor }: Props) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    )
}

export default MenuSVG