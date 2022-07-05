import React from 'react';

import { Container, Profile, Avatar, Greeting, UserName } from './styles';
import Watering from '../../assets/watering.png';

const Header: React.FC = () => {
  return (
    <Container>
        <Profile>
          <Greeting>
              Òla
          </Greeting>
          <UserName>
              Antonio JR
          </UserName>
        </Profile>
        <Avatar source={Watering} />
    </Container>
  );
}

export default Header;