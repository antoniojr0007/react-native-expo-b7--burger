import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
`;


export const Content = styled.View`
    padding-left: 20px;
    padding-right: 20px;
`;

export const Text = styled.Text` 
    font-size: 17px;
    font-family: ${({theme})=> theme.fonts.text};
    color: ${({theme})=> theme.colors.heading};
    font-weight: 23px;
`;

export const SubText = styled.Text` 
    font-size: 17px;
    font-family: ${({theme})=> theme.fonts.text};
    color: ${({theme})=> theme.colors.heading};
    font-weight: 20px;
`;

export const Roons = styled.View`
  margin-top: 10px;
`;

export const RoonCards = styled.FlatList`
    
`;

export const SelectCards = styled.FlatList`
    flex: 1;
    margin: 20px;
`;
