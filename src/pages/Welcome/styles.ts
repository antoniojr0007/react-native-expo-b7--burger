import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};

`;

export const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.heading};
    text-align: center;
    color: ${({theme}) => theme.colors.heading};
    margin-top: 40px;
    line-height: 35px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.text};
    padding: 20px;
    color: ${({theme}) => theme.colors.heading};
    font-weight: bold;
    line-height: 30px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    height: 56px;
    width: 56px;
    margin-bottom: 30px;
`;

