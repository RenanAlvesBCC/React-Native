import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';
import Aluno from './pages/aluno';


const stack = createStackNavigator({
    Main,
    Aluno
},{
    defaultNavigationOptions: {
        title: 'JSHunt',
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }
});
const App = createAppContainer(stack);

export default App;