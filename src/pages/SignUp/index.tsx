import React from 'react'
import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

import emailIcon from '../../assets/img/email.svg';
import PasswordIcon from '../../assets/img/password.svg';
import profileIcon from '../../assets/img/profile.svg';

import { Container,Column,Wrapper,Title, TitleSignUp, SubtitleSignUp,TermsText,LoginText } from './styles'

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required('Campo Obrigatorio.'),
    email: yup.string().email('Email nao e valido.').required('Campo Obrigatorio.'),
    password: yup.string().min(3, 'No minimo 3 caracteres.').required('Campo Obrigatorio.'),
}).required();

const SignUp =() => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    
    const onSubmit = (data: any) => {
        console.log(data);
        navigate('/feed');
    }

  return (
    <>
    <Header />
    <Container>
        <Column>
            <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubtitleSignUp>Crie sua conta e make the change._</SubtitleSignUp>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name='name' errorMessage={errors?.name?.message} placeholder='Nome Completo' leftIcon={profileIcon} />
            <Input control={control} name='email' errorMessage={errors?.email?.message} placeholder='Email' leftIcon={emailIcon} />
            <Input control={control} name='password' errorMessage={errors?.password?.message} type='password' placeholder='Senha' leftIcon={PasswordIcon}  />
            <Button title="Cadastrar" variant='secondary' type='submit' />
            </form>
            <TermsText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsText>
            <LoginText>Já tenho conta. <span onClick={() => {navigate('/login')}}>Fazer login</span></LoginText>
            </Wrapper>
        </Column>
    </Container>
    </>
    
  )
}

export { SignUp}