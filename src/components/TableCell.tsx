import React, { useState } from 'react';

type Props = {
    value: string;
    isSelected: boolean;
    onClick: () => void;
    onChange: (newValue: string) => void;
}

const TableCell = ({ value, isSelected, onClick, onChange } : Props) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };
  
  const handleBlur = () => {
    setIsEditing(false);
  };
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={`min-w-[154px] pl-2 flex items-center text-left ${isSelected ? 'border-blue-600 border-2' : 'border border-gray-400'} bg-[#A5A5A5]`}
      onClick={onClick}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
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
