import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header";
import { Input } from "../../Components/Input";

import EmailIcon from "../../assets/img/email.svg";
import PasswordIcon from "../../assets/img/password.svg";
import { Container, Title, Column, CriarText, Row, EsqueciText, SubtitleLogin, TitleLogin, Wrapper} from './styles';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from "react";
import { IFormData } from "./types";

const schema = yup.object({
  email: yup.string().email('Email nao e valido.').required('Campo Obrigatorio.'),
  password: yup.string().min(3, 'No minimo 3 caracteres.').required('Campo Obrigatorio.'),
}).required();

const Login = () =>{
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    
    const onSubmit = data => {
        console.log(data);
        navigate('/feed');
    }


    

    return(
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
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={EmailIcon} />
                        <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={PasswordIcon}/>
                        <Button title="Entrar" variant="secondary" type="submit" />   
                    </form>
                    <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login };