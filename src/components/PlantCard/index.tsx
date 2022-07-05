import React from 'react';
import { Card, TitleCard } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';
import SvgFromUri from "react-native-svg"



interface PlantProps extends RectButtonProps{
  data: {
    name: string;
    photo: string;
  }
}
  export function PlantCard( {data, ...rest} : PlantProps) {
    return (
        (
            <Card activeOpacity={0.7}
              {...rest}
            >
              <SvgFromUri 
                uri={data.photo} 
                width={70} 
                height={70} 
              />
              <TitleCard>
                {data.name}
              </TitleCard>
            </Card> 
      )
    );
  }