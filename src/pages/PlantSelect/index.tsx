import React, { useEffect, useState } from 'react';

import { Container, Content, SubText, Roons, SelectCards,Text, RoonCards } from './styles';
import { PlantCard } from '../../components/PlantCard';
import Header from '../../components/Header';
import { EnviramentButton } from '../../components/EnviramentButton';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Load from '../../components/Load';


interface EnviromentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: String;
    name: String;
    about: String;
    water_tips: String;
    photo: String;
    environments: [String];
    frequency: {
      times: number;
      repeat_every: String;
    }
}

const PlantSelect: React.FC = () => {
    const [enviroments, setEnvirtoments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);    

    const navigation = useNavigation();

    function handleEnrivomentSelected(environment: string){
        setEnviromentSelected(environment);

        if(environment == 'all')
            return setFilteredPlants(plants);
        
        const filtered = plants.filter(plant => 
            plant.environments.includes(environment)
        );

        setFilteredPlants(filtered);
    }

    async function fetchPlants(){
        const { data } = await api
        .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);        

        if(!data)
            return setLoading(true);

        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        }else {
            setPlants(data);
            setFilteredPlants(data);
        }
        
        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if(distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', { plant });
    }


    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api
            .get('plants_environments?_sort=title&_order=asc');
            setEnvirtoments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }

        fetchEnviroment();
    },[])

    useEffect(() => {        
        fetchPlants();
    },[])


    if(loading)
        return <Load />
        
    
  return (
    <Container>
        <Header />
        <Content>
        <Text>
            Em qual ambiente 
        </Text>
        <SubText>
            você quer colocar sua planta?
        </SubText>
        <Roons>
            <RoonCards
                data={enviroments}
                keyExtractor={(item) => String(item.key)}
                renderItem={(item) => (
                    <EnviramentButton 
                        title={item.title}
                        active
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Roons>
        <SelectCards
            data={plants}
            renderItem={(item)=>(
                <PlantCard data={item} />
            )}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
        />    
        </Content>
    </Container>
  );
}

export default PlantSelect;