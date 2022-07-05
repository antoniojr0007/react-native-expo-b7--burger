import styled from 'styled-components/native';


export const ButtonPro = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    height: 56px;
    width: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
`;

export const TitleButtonPro = styled.Text`
    font-size: 20px;
    text-align: center;
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme})=> theme.fonts.heading};
    font-weight: bold;
`;