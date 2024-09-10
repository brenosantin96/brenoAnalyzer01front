"use client"
import React, { useState, useEffect } from 'react';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

//x e y sao posicoes do mouse
//onClose seria a funcao que vai ser passada ao componente para que seja fechado o menu.
export const RightClickContextMenuTable: React.FC<ContextMenuProps> = ({ x, y, onClose }) => {

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      onClose();
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);


//em Style estamos colocando top onde o y vai ser em relacao ao topo da pagina ate onde foi clicado e x vai ser em relacao a esquerda da pagina ate onde foi clicado
  return (
    <div
      className={`bg-white border border-gray-300 shadow-lg rounded-md w-40 absolute z-50 `}
      style={{ top: y, left: x }}
    >
      <div className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer">Remover</div>
      <div className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer">Alterar</div>
      <div className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer">Criar</div>
    </div>
  );
};






// Componente que usa o Context Menu
export const TableComponent = () => {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.pageX, y: e.pageY });
  };

  const handleCloseMenu = () => {
    setContextMenu(null);
  };

  return (
    <div onContextMenu={handleRightClick} className="h-screen w-screen bg-gray-100">
      <h1 className="text-center p-4">Clique com o botão direito para abrir o menu</h1>
      {contextMenu && (
        <RightClickContextMenuTable x={contextMenu.x} y={contextMenu.y} onClose={handleCloseMenu} />
      )}
    </div>
  );
};
