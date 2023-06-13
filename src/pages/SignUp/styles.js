import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    max-width:80%;
    margin: 0 auto;
    margin-top:120px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
`

export const Column = styled.div`
    flex:1;
`

export const Wrapper = styled.div`
    max-width:300px;
`
export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight:700;
    font-size:32px;
    width:320px;
    line-height:44px;
    margin-bottom:20px;

    color:#fff;
`

export const TitleSignUp = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight:700;
    font-size:32px;
    line-height:44px;
    margin-bottom:20px;

    
`

export const SubtitleSignUp = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight:400;
    font-size:18px;
    line-height:25px;
    margin-bottom:35px;
`

export const TermsText = styled.p`
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    margin-top:30px;

`

export const LoginText = styled.p`
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    margin-top:10px;
    
    span{
        color:#23DD7A;
        cursor:pointer;
    }
`