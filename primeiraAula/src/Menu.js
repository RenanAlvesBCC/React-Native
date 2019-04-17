import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';
import Simples from './componentes/Simples';
import Contador from './componentes/Contador';
import Plataforma from './componentes/Plataformas';
import Padrao from './estilo/Padrao';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import ComunicacaoIndireta from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

const DrawerNavigator = createDrawerNavigator( {
    Flex: {
        screen: () => <Flex/>
    },
    ListaFlex: {
        screen: () => <ListaFlex/>
    },
    ComunicacaoIndireta: {
        screen: () => <ComunicacaoIndireta />
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva'/>
    },
    Evento: {
        screen: () => <Evento/>
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={19}/>
    },
    Plataforma: {
        screen: () => <Plataforma style={Padrao.ex}/>
    },
    Contador: {
        screen: () => <Contador valorInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}/>
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!!!!'/>
    }
}, {
    drawerWidth: 300
})

const Menu = createAppContainer(DrawerNavigator);
export default Menu;
