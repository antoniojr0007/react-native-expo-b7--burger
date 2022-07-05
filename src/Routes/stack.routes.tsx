import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Confirmation from '../pages/Confirmation';
import UserIdentification from '../pages/UserIdentification';
import Welcome from '../pages/Welcome';
import PlantSelect from '../pages/PlantSelect';


const StackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator screenOptions={{ headerShown:false }}>
      <StackRoutes.Screen name="Plantselect" component={PlantSelect} />
      <StackRoutes.Screen name="Welcome" component={Welcome} />
      <StackRoutes.Screen name="UserIdentification" component={UserIdentification} />
      <StackRoutes.Screen name="Confirmation" component={Confirmation} />
    </StackRoutes.Navigator>
  );
  

  export default AppRoutes;
