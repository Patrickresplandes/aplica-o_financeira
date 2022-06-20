import React from 'react';
import Resumeitem from '../Resumeitem';
import * as C from "./style";
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
  return (
    <C.Container> 
        <Resumeitem title="Entradas" Icon= {FaRegArrowAltCircleUp} value={income}/>
        <Resumeitem title="Saidas" Icon= {FaRegArrowAltCircleDown} value={expense}/>
        <Resumeitem title="Total" Icon= {FaDollarSign} value={total}/>
    </C.Container>
  );
  };

export default Resume;