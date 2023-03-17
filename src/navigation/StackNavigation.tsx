import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import HobbyDetails from '../screens/HobbyDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Categories' component = { CategoriesScreen }
                    options = {{
                        title: 'Mis Categorias',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#3CB371' },
                        headerTintColor: 'black',
                    }} />
                <Stack.Screen name = 'Details' component = { HobbyDetails } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation