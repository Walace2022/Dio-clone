import React from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon?: string;
    name: string;
    control: any;
    errorMessage?: string;
}