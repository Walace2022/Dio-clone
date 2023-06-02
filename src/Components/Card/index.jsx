import React from 'react'
import { CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture } from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture />
                <div>
                    <h4>Nome do Usuario</h4>
                    <p>Ha 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Titulo do projeto.</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #JavaScript</h4>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };