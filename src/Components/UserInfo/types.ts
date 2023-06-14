import React from "react";

export interface IUserInfo{
    nome: string;
    image?: React.ReactNode;
    percentual: number;
}

export interface IUserInfoStyled{
    percentual:number;
}