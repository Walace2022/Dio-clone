import React from 'react'
import { InputContainer, IconContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form';
import { IInput } from './types';

const Input = ({leftIcon, name,control,errorMessage, ...rest} : IInput) => {
  return (
    <>
    <InputContainer>
        
        {leftIcon ? (<IconContainer>{<img src={leftIcon} />}</IconContainer>) : null}
        <Controller 
          name={name}
          control={control}
          rules={{required: true}}
          render={({field}) => <InputText {...field} {...rest}/>}
          />
        </InputContainer>
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
        {}
    </>
  )
}

export {Input};
