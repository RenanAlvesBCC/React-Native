import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Agenda from './screens/Agenda';
import Auth from './screens/Auth';
import commonStyles from './CommonStyles'
import Menu from './component/Menu';

const MenuRoutes = {
    Hoje: {
        name: 'Today',
        screen: props => <Agenda title='Hoje' daysAhead={0} {...props} />,
        navigationOption: {
            title: 'Hoje'
        }
    },
    Amanhã: {
        name: 'Tomorrow',
        screen: props => <Agenda title='Amanhã' daysAhead={1} {...props} />,
        navigationOption: {
            title: 'Amanhã'
        }
    },
    Semana: {
        name: 'Week',
        screen: props => <Agenda title='Semana' daysAhead={7} {...props} />,
        navigationOption: {
            title: 'Semana'
        }
    },
    Mês: {
        name: 'Month',
        screen: props => <Agenda title='Mês' daysAhead={30} {...props} />,
        navigationOption: {
            title: 'Mês'
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Hoje',
    contentComponent: Menu,
    contentOption: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20,
        },
        activeLabelStyle: {
            color: '#080',
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator
    }
}

const MainNavigator = createAppContainer(createSwitchNavigator(MainRoutes, {initialRouteName: 'Auth'}))

export default MainNavigator