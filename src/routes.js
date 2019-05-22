

import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Evento from './pages/evento';
import Parceiros from './pages/parceiros';
import Acessos from './pages/acessos';
import Palestrantes from './pages/palestrantes';
import Palestrante from './pages/palestranteDetail';
import Programacao from './pages/programacao';
import Visitas from './pages/visitas';
import VisitaDetail from './pages/visitaDetail';
import ActionExternal from './pages/actionExternal';
 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArchway, faCalendarWeek, faRoute, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Variables from './styles';

const PalestranstesStack = createStackNavigator({
    PalestranteList: {
        screen: Palestrantes
    },
    Palestrante: {
        screen: Palestrante
    }
},
{
    headerMode: 'none'
})

const VisitasStack = createStackNavigator({
    VisitaList: {
        screen: Visitas
    },
    Visita: {
        screen: VisitaDetail
    },
    VisitaReservar: {
        screen: ActionExternal
    }
},
{
    headerMode: 'none'
})

const ProgramacaoStack = createStackNavigator({
    ProgramacaoList: {
        screen: Programacao
    },
    ProgramacaoInscrever: {
        screen: ActionExternal
    }
},
{
    headerMode: 'none'
})

const EventoStack = createStackNavigator({
    EventoMain: {
        screen: Evento
    },
    Parceiros: {
        screen: Parceiros
    },
    EventoAvaliacao: {
        screen: ActionExternal
    },
    Acessos: {
        screen: Acessos
    }
},
{
    headerMode: 'none'
})

const TabNavigator = createBottomTabNavigator({
  Evento: {
    screen: EventoStack,
    navigationOptions: {
        title: 'EVENTO',
        tabBarIcon: ({tintColor}) => <FontAwesomeIcon color={tintColor} icon={faArchway } />
    }
      
  },
  Programacao: {
    screen: ProgramacaoStack,
    navigationOptions: {
        title: 'PROGRAMAÇÃO',
        tabBarIcon: ({tintColor}) => <FontAwesomeIcon color={tintColor} icon={faCalendarWeek } />
    }
  },
  Palestrantes: {
    screen: PalestranstesStack,
    navigationOptions: {
        title: 'PALESTRANTES',
        tabBarIcon: ({tintColor}) => <FontAwesomeIcon color={tintColor} icon={faUserTie } />
    }
  },
  Visitas: {
    screen: VisitasStack,
    navigationOptions: {
        title: 'VISITAS',
        tabBarIcon: ({tintColor}) => <FontAwesomeIcon color={tintColor} icon={faRoute } />
    }
    },
}, 
{
    tabBarOptions: {
        activeTintColor: Variables.colors.whitesh,
        activeBackgroundColor: Variables.colors.primary,
        inactiveTintColor: Variables.colors.regular,
        inactiveBackgroundColor: Variables.colors.whitesh,
        allowFontScaling: false,
            labelStyle: {
            fontSize: 10,
            marginTop: -10
        },
        tabStyle: {
            borderTopWidth: 1.2,
            borderTopColor: Variables.colors.primary
        }
    }
});


export default TabNavigator;