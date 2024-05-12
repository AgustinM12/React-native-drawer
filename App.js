import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { CounterScreen } from './pages/Counter.page';
import { HomeScreen } from './pages/Home.page';
import { AddScreen } from './pages/AddChara.page';
import { OwScreen } from './pages/Ow.page';
import { CharaInfoPage } from './pages/CharaInfo.page';
import { AppProvider } from './context/context';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Overwatch 2 Wiki'>
          <Drawer.Screen name="Overwatch 2 Wiki" component={OwScreen} />
          <Drawer.Screen
            name="Character Info"
            component={CharaInfoPage}
            options={{
              unmountOnBlur: true,
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
