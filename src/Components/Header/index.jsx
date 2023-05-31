import React from 'react'
import { Container,Row,Column,Wrapper,BuscarInputContainer,Menu,MenuRight,UserPicture,Input } from './styles';
import { Button } from '../Button';
import Logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={Logo} alt="Logo da DIO" />   
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer> 
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};
