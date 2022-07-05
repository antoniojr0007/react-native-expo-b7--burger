import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.white};
    
    `;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
`;

export const Emoji = styled.Text`
    font-size: 80px;
`;

export const Title = styled.Text`
    font-size: 22px; 
    font-family: ${({theme})=> theme.fonts.heading};
    text-align: center;
    color: ${({theme})=> theme.colors.heading};
    line-height: 38px;
    margin-top: 20px;
`;

export const SubTitle = styled.Text`
     font-size: 17px; 
    font-family: ${({theme})=> theme.fonts.text};
    text-align: center;
    color: ${({theme})=> theme.colors.heading};
    padding-bottom: 10px;
    padding-top: 10px;
`;

export const Footer = styled.View`
    margin-top: 40px;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
`;