import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const MiniCard = styled(RectButton)`
    background-color:${({theme}) => theme.colors.shape};
    height: 40px;
    width: 76px;
    justify-content: center;
    align-items: center;
    margin: 2px;
    border-radius: 15px;
`;

export const TitleMiniCard = styled.Text`
    color: ${({theme}) => theme.colors.green_dark};
    font-family: ${({theme})=> theme.fonts.complement};
`;
