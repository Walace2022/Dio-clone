import React from 'react'

import { Container,Row,Wrapper,BuscarInputContainer,Menu,MenuRight,UserPicture,Input } from './styles';
import Logo from '../../assets/img/logo-dio.svg';

import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import { IHeader } from './types';

const Header = ({autenticado} : IHeader) => {
    const navigate = useNavigate();
    const goToLogin = () =>{
        navigate('/login')
    }
    const goToSignUp = () => {
        navigate('/signup')
    }
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={Logo} alt="Logo da DIO" />
                {autenticado ? (
                    <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                    </BuscarInputContainer> 
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ) : null}   
            </Row>
            <Row>
                {autenticado ? ( 
                <>
                <UserPicture />
                </>
                ) : (
                    <>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button  title="Entrar" onClick={goToLogin}/>
                    <Button  title="Cadastrar" onClick={goToSignUp}/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};
