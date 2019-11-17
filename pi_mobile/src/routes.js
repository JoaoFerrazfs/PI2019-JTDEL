import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/main';
import InformacaoProjeto from './pages/informacaoProjeto';
import DadosCliente from './pages/dadosCliente';

const AppNavigator = createStackNavigator (
    {
        Home: {
            screen: Main
        },
        Cliente: {
            screen: DadosCliente
        },
        Projeto: {
            screen: InformacaoProjeto
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerTransparent: true,
            headerStyle: {
                backgroundColor: 'transparent'
            }
        }
    }
);

const AppContainer = createAppContainer (AppNavigator);

export default AppContainer;

