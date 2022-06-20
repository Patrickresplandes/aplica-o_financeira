import React from 'react';
import GridItem from "../GridItem";
import * as C from "./style";

const Grid = ({itens, setItens}) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transition) => transition.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
    };
    
  return (
    <C.Table>
        <C.Thead>
            <C.Tr>
                <C.Th width={40}>Descrição</C.Th>
                <C.Th width={40}>Valor</C.Th>
                <C.Th width={10} alignCenter>Tipo</C.Th>
                <C.Th width={10}></C.Th>
            </C.Tr>
        </C.Thead>
        <C.tBody>
            {itens?.map((item, index) => (
                <GridItem key={index} item={item} onDelete={onDelete} />
            ))}
        </C.tBody>
    </C.Table>
  )
}

export default Grid;