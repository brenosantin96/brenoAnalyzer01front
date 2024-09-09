import React, { useEffect, useState } from 'react';

type Props = {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  onChange: (newValue: string) => void;
  onEditingChange: (isEditing: boolean) => void; // Adicione a prop aqui
  width: string;
  bgColor: string;
  fontSize: string;
  evenOrOddColor: 0 | 1; //estou colocando aqui porque de algum modo da bug ao aplicar na ROW....
}

const TableCell = ({ value, isSelected, onClick, onChange, width, bgColor, fontSize, evenOrOddColor, onEditingChange }: Props) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    //The onblur event occurs when an HTML element loses focus
    setIsEditing(false);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

   // Utilize o useEffect para notificar o componente pai quando o estado isEditing mudar
   useEffect(() => {
    onEditingChange(isEditing);
  }, [isEditing]);


  //retorno condicional uma div normal se nao estiver editando, se estiver editando retornamos um input....

  return (
    <div
      className={`${width} ${bgColor} ${fontSize} text-[#5A5A5A] text-wrap flex items-center text-left 
      ${isSelected ? 'border-gray-600 border-2' : 'border border-gray-400'}
      ${evenOrOddColor === 0 ? "bg-gray-300" : "bg-white"}
      ${isEditing ? "pl-0" : "pl-2"}
      `}


      onClick={onClick}
      onDoubleClick={handleDoubleClick}

    >
      {isEditing ? (
        <input
          className={`h-[79px] ${width} outline-none`}
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export default TableCell;
