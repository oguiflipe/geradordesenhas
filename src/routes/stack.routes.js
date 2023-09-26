import { createStackNavigator} from '@react-navigation/stack';

import TabRoutes from './tab.routes';
import { Home } from '../pages/home';

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Home'
            component={TabRoutes}
            />
        </Stack.Navigator>
    )
}