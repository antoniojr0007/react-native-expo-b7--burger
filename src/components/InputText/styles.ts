import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
    placeholderTextColor: theme.colors.heading
  })) <TextInputProps>`
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.gray};
    color: ${({theme}) => theme.colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.heading};
`;