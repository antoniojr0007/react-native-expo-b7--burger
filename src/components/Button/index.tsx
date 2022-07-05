import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { ButtonPro, TitleButtonPro } from './styles';


interface ButtonProps extends TouchableOpacityProps{
  title?: string
}

export function Button( {title, ...rest} : ButtonProps) {
  return (
    (
      <ButtonPro 
        activeOpacity={0.7}
        {...rest}
      >
        <TitleButtonPro>
          {title}
        </TitleButtonPro>
      </ButtonPro>
    )
  );
}
