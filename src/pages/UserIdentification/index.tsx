import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform,TouchableWithoutFeedback } from 'react-native';
import theme from '../../../styles/theme';
import { Button } from '../../components/Button';
import {InputText} from '../../components/InputText';

import { Container, Content, Form, Emoji, Text, Footer} from './styles';

const UserIdentification: React.FC = () => {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>('')

    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name)
    }

    function handleInputFocus(){
        setIsFocused(true)

    }

    function handleInputChange(value: string){
        setIsFilled(!!value)
        setName(value)
    }

   
    function handleSubmit() {
        navigation.navigate('Confirmation');
    }
  return (
    <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Content>
                <Form>
                    <Emoji>
                        { isFilled ? '😄' : '😀' }
                    </Emoji>
                    <Text>
                        Como podemos {'\n'} chamar você?
                    </Text>
                    <InputText style={(isFocused || isFilled) && {borderColor: theme.colors.green}}
                        placeholder="Digite seu Nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />
                    <Footer>
                        <Button title='Confirmar' onPress={handleSubmit}/>
                    </Footer>
                </Form>
            </Content>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </Container>
  )
}

export default UserIdentification;