import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../../styles/theme';

interface EnviramentButtonProps extends RectButtonProps{
  title: string
  active: boolean
}

import { MiniCard, TitleMiniCard} from './styles';


export function EnviramentButton( {title, active = false, ...rest} : EnviramentButtonProps) {
  return (
      (
        <MiniCard activeOpacity={0.7} {...rest} style={(active) && {backgroundColor: theme.colors.green_light}} >
        <TitleMiniCard style={(active) && {color: theme.colors.green, fontFamily:theme.fonts.heading}} >
          {title}
        </TitleMiniCard>
      </MiniCard> 
    )
  );
}

