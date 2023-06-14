import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header";
import { Container, TextContent, Title, TitleHighlight} from './styles';
import Banner from '../../assets/img/banner.png'
import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () =>{
    const navigate = useNavigate();

    const handleclickSignIn = () => {
        navigate('/login');
    }

    return(
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                        Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora!    
                    </Title>
                    <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começe agora" variant="secondary" onClick={handleclickSignIn} />
                </div>
                <div>
                    <img src={Banner} alt="Imagem principal" />
                </div>
            </Container>
        </>
    )
}

export {Home};