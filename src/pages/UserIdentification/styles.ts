import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.white};
    
    `;

export const Content = styled.View`
    flex: 1;
    width: 100%;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: space-around;
    padding: 56px;
    align-items: center;

`;

export const Emoji = styled.Text`
    font-size: 50px;
    padding: 10px;
`;

export const Text = styled.Text`
    font-size: 30px;
    align-items: center;
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme})=> theme.colors.heading};
`;

export const Title = styled.Text`
    font-size: 24px;
    line-height: 32PX;
    align-items: center;
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme})=> theme.colors.heading};
    margin-top: 20px;

`;

export const Footer = styled.View`
   margin-top: 40px;
   width: 100%;
`;