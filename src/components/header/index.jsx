import { FiSearch } from 'react-icons/fi';
import React, {useState, useContext} from 'react';
import client from "../../services/client";
import { context } from '../../context';
import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

const Header = () => {
const ctx = useContext(context);   
const[search, setSearch]=useState('');

async function getUserData(){
try{
const response = await client.get(`/${search}`);
const repos = await client.get(`/${search}/repos`)
ctx.setUserData(response.data);
ctx.setRepos(repos.data)
}catch(err){
console.log(err);

}
   

}
    return(
    <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={search} onChange={e => setSearch(e.target.value)} />
            
            <HeaderSearchButton onClick={getUserData}>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
)};

export default Header;