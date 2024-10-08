import React from "react";

export const columnWidths = [
    'min-w-[154px]',
    'min-w-[190px]',
    'min-w-[810px]',
    'min-w-[810px]',
    'min-w-[330px]',
    'min-w-[154px]'
  ];

 export const textToHtmlParagraph3 = (text: string) => {
    // Divida o texto em linhas separadas por '\n'
    const lines = text.split('\n');
  
    // Retorne um JSX com <p> e <br />
    return (
      <p>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    );
  }