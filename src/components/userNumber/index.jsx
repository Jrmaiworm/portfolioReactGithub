import { useHistory } from "react-router-dom";
import React from "react";
import {
Container,
NumberContainer
}from "./styles"

const UserNumber = props =>{
    const history= useHistory;
    const handleOnclick = route => history.push(route);

    // function handleOnclick(route){
    //   return( history.push(route)); 
    // }

    return(
<Container>
    <NumberContainer onClick={()=>handleOnclick('/repos')} >
        <h1>{props?.repo}</h1>
        <h2>Repositórios</h2>
    </NumberContainer>
    <NumberContainer>
        <h1>{props?.followers}</h1>
        <h2>Seguidores</h2>
    </NumberContainer>
    <NumberContainer>
        <h1>{props?.following}</h1>
        <h2>Seguindo</h2>
    </NumberContainer>
</Container>


)};export default UserNumber;