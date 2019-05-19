import React, { Component } from 'react';

import {
    Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView
  } from 'react-native';

import styles from './styles';
import openMap from 'react-native-open-maps';

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
                        <Text style={styles.normalCardTitle}>Parceiros</Text>
                        <Text style={styles.normalCardBody}>
                            Parceiros Oficiais do 39º Congresso Brasileiro de Guias de Turismo
                        </Text>


                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                            <Image resizeMode='contain' source={require('../../images/parceiros/carlinhos.jpg')} style={styles.pestana} />                
                            <Image resizeMode='contain' source={require('../../images/parceiros/cassi.jpg')} style={styles.pestana} />                
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                            <Image resizeMode='contain' source={require('../../images/parceiros/coliseu.jpg')} style={styles.pestana} />                
                            <Image resizeMode='contain' source={require('../../images/parceiros/dt.jpg')} style={styles.pestana} />                
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                            <Image resizeMode='contain' source={require('../../images/parceiros/fortbeach.jpg')} style={styles.pestana} />                
                            <Image resizeMode='contain' source={require('../../images/parceiros/grou.png')} style={styles.pestana} />                
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                            <Image resizeMode='contain' source={require('../../images/parceiros/lr.png')} style={styles.pestana} />                
                            <Image resizeMode='contain' source={require('../../images/parceiros/luck.png')} style={styles.pestana} />                
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                            <Image resizeMode='contain' source={require('../../images/parceiros/manguezal.jpg')} style={styles.pestana} />                
                            <Image resizeMode='contain' source={require('../../images/parceiros/pelourinho.png')} style={styles.pestana} />                
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                            <Image resizeMode='contain' source={require('../../images/parceiros/sac.jpg')} style={styles.pestana} />                
                            <Image resizeMode='contain' source={require('../../images/parceiros/salvadorDestination.png')} style={styles.pestana} />                
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                            <Image resizeMode='contain' source={require('../../images/parceiros/suporte.jpg')} style={styles.pestana} />                
                            <Image resizeMode='contain' source={require('../../images/parceiros/turismoTotal.jpg')} style={styles.pestana} />                
                        </View>

                    </ScrollView>
                </View>

            </View>
        )
    }
}