import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header";
import { Input } from "../../Components/Input";

import EmailIcon from "../../assets/img/email.svg";
import PasswordIcon from "../../assets/img/password.svg";
import { Container, Title, Column, CriarText, Row, EsqueciText, SubtitleLogin, TitleLogin, Wrapper} from './styles';


const Login = () =>{
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
                    <form action="">
                        <Input placeholder="E-mail" leftIcon={EmailIcon}/>
                        <Input placeholder="Senha" type="password" leftIcon={PasswordIcon}/>
                        <Button title="Entrar" variant="secondary" />   
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