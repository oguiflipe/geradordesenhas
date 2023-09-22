import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import {Home} from './pages/home';
import {Passwords} from './pages/passwords';

import {Ionicons} from '@expo/vector-icons';
import { SplashScreem } from './pages/splash';


const Tab = createBottomTabNavigator();


export function Routes(){
    return(
        
        <Tab.Navigator>
            <Tab.Screen 
            name='Start'
            component={SplashScreem}
            options={{
                tabBarInactiveBackgroundColor:"#4b9093",
                tabBarActiveBackgroundColor:"#4b9093",
                lazy: true,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle:{backgroundColor: "#FFF"},
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return <Ionicons size={30} color='#f59a73' name="checkmark-circle"/>
                    }
                    return <Ionicons size={size} color={color} name="checkmark-circle-outline"/>
                }
            }}
            />

            <Tab.Screen 
            name='Início'
            component={Home}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle:{backgroundColor: "#FFF"},
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return <Ionicons size={30} color='#4b9093' name="home"/>
                    }
                    return <Ionicons size={size} color={color} name="home-outline"/>
                }
            }}
            />

            <Tab.Screen 
            name='Senhas'
            component={Passwords}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                headerShown: false,
                tabBarStyle:{backgroundColor: "#FFF"},
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return <Ionicons size={30} color='#4b9093' name="lock-closed"/>
                    }
                    return <Ionicons size={size} color={color} name="lock-closed-outline"/>
                }
            }}
            />
        </Tab.Navigator>
    );

    
}