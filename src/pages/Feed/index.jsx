import {Header} from "../../Components/Header";
import { Container, Column, Title, TitleHighlight} from './styles';
import { Card } from "../../Components/Card";
import { UserInfo } from "../../Components/UserInfo";

const Feed = () =>{
    return(
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />   
                    <Card />   
                    <Card />   
                    <Card />   
                </Column>
                <Column flex={1}>
                    <TitleHighlight># Rankig Top 5 Semanal</TitleHighlight>
                    <UserInfo nome="Henrique Walace" percentual={5} />          
                    <UserInfo nome="Henrique Walace" percentual={65} />          
                    <UserInfo nome="Henrique Walace" percentual={45} />          
                    <UserInfo nome="Henrique Walace" percentual={15} />          
                    <UserInfo nome="Henrique Walace" percentual={35} />          
                </Column>
            </Container>
        </>
    )
}

export {Feed};