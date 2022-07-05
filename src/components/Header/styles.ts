import { getStatusBarHeight  } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20PX;
  margin-top: ${getStatusBarHeight()};
`;
export const Profile = styled.View``;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  font-family: ${({theme})=> theme.fonts.text};
  color: ${({theme})=> theme.colors.heading};
`;

export const UserName = styled.Text`
    font-size: 32px;
    font-family: ${({theme})=> theme.fonts.heading};
    color: ${({theme})=> theme.colors.heading};
    font-weight: 40px;
`;