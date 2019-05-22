import React, { Component } from 'react';

import {
    Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView
  } from 'react-native';

import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import MuseuData from '../../components/museusData';
export default class Evento extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: "#fff"}} />
                <View style={styles.header}>
                    <View style={styles.logoView}>
                        <Image resizeMode='contain' source={require('../../images/logo.png')} style={styles.logo} />                
                    </View>
                </View>
                <View  style={styles.body}>
                    <ScrollView style={styles.aboutCard}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flexDirection: 'row'}}>
                            <FontAwesomeIcon style={{marginTop: 7}} color={Variables.colors.dark} size={20} icon={faAngleLeft} />

                            <Text style={styles.normalCardTitle}>Acessos Gratuitos a pontos Turísticos</Text>

                        </TouchableOpacity>
                        <Text style={styles.normalCardBody}>
                            Você tem acesso gratuito em diversos pontos turísticos de Salvador!!!
                        </Text>
                        <Text style={styles.normalCardBody}>
                            Basta apresentar a credencial do evento que você pode ter acesso a Casa do Carnaval, ao Museu Afro-Brasileiro, a Casa do Rio Vermelho, ao Forte São Diogo e ao Forte de Santa Maria.
                        </Text>

                        
                        <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center", alignSelf: "center", flexWrap: 'wrap'}}>
                            {MuseuData.map(e => (
                                <View key={e.id}>
                                    <Image resizeMode='contain' source={e.image} style={styles.pestana} />                
                                    <Text style={styles.museuTitle}>
                                        {e.title}
                                    </Text>
                                    <Text style={styles.museuObs}>
                                        {e.taxa}
                                    </Text>
                                </View>
                            ))}
                        </View>



                    </ScrollView>
                </View>

            </View>
        )
    }
}