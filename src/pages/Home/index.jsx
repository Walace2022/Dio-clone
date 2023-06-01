import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import {Header} from "../../Components/Header";
import { Container, TextContent, Title, TitleHighlight} from './styles';
import Banner from '../../assets/img/banner.png'

const Home = () =>{
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
                    <Button title="Começe agora" variant="secondary" onClick="" />
                </div>
                <div>
                    <img src={Banner} alt="Imagem principal" />
                </div>
            </Container>
        </>
    )
}

export {Home};