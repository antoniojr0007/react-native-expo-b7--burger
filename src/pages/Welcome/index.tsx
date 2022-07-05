import React from 'react';
import { Image, Dimensions, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Watering from '../../assets/watering.png';

import { Container, Title, SubTitle, Wrapper, ButtonIcon } from './styles';



const Welcome: React.FC = () => {
    const navigation = useNavigation();
    function handleSubmit() {
        navigation.navigate('UserIdentification');
    }
    return (
        <Container >
            <Wrapper>
                <Title>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</Title>
                <Image 
                    source={Watering} 
                    style={styles.image}
                    resizeMode="contain"
                />
                <SubTitle>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </SubTitle>
                <ButtonIcon  onPress={handleSubmit} >
                    <Feather name="chevron-right" size={32} color="#F0F0F0" />
                </ButtonIcon>
            </Wrapper>
        </Container>
    )
}

export default Welcome;

const styles = StyleSheet.create({ 
    image: {       
        height: Dimensions.get('window').width * 0.7
    }
});