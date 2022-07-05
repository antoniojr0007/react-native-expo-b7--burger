import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Card = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    margin: 10px;
    justify-content: center;
    height: 148px;
    width: 154px;
    border: 1px solid ${({theme}) => theme.colors.gray};
    `;

export const TitleCard = styled.Text`
    color: ${({theme}) => theme.colors.heading};
    font-family: ${({theme})=> theme.fonts.complement};
    margin-left: 16px;
    margin-right: 16px;
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    line-height: 23px;
    margin-top: 10px;
`;

