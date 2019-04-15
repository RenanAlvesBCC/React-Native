import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';
import Simples from './componentes/Simples';

const DrawerNavigator = createDrawerNavigator( {
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo' />,
        navigationOptions: {title: 'Inverter'}
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: { title: 'Par $ Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!!!!'/>,
        navigationOptions: {title: 'Simples'}
    }
}, {
    drawerWidth: 300
})
const Menu = createAppContainer(DrawerNavigator);
export default Menu;
